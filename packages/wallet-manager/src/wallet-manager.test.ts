import { Address } from '@fuel-ts/address';
import { hashMessage } from '@fuel-ts/hasher';
import { Signer } from '@fuel-ts/signer';
import { Wallet } from '@fuel-ts/wallet';

import MemoryStorage from './storages/memory-storage';
import type { VaultConfig } from './types';
import { WalletManager } from './wallet-manager';
import WalletManagerSpec from './wallet-manager-spec';

describe('Wallet Manager', () => {
  const setupWallet = async (config: VaultConfig) => {
    const walletManager = new WalletManager();
    const password = '0b540281-f87b-49ca-be37-2264c7f260f7';

    await walletManager.unlock(password);

    // Add a vault of type mnemonic
    await walletManager.addVault(config);

    return {
      walletManager,
      password,
    };
  };

  it('Test lock and unlock wallet', async () => {
    const { walletManager, password } = await setupWallet({
      type: 'mnemonic',
      secret: WalletManagerSpec.mnemonic,
    });

    await walletManager.lock();

    expect(walletManager.isLocked).toBeTruthy();
    expect(walletManager.getAccounts()).toEqual([]);

    await walletManager.unlock(password);
    expect(walletManager.isLocked).toBeFalsy();
    expect(walletManager.getAccounts().length).toEqual(1);

    await walletManager.lock();
    expect(walletManager.isLocked).toBeTruthy();
    expect(walletManager.getAccounts()).toEqual([]);

    await walletManager.unlock(password);
    expect(walletManager.getAccounts().length).toEqual(1);
  });

  it('Create accounts from mnemonic', async () => {
    const { walletManager, password } = await setupWallet({
      type: 'mnemonic',
      secret: WalletManagerSpec.mnemonic,
    });

    // Add account m/44'/1179993420'/0'/0/1
    await walletManager.addAccount();
    // Add account m/44'/1179993420'/0'/0/2
    await walletManager.addAccount();
    // Add account m/44'/1179993420'/0'/0/3
    await walletManager.addAccount();
    // Add account m/44'/1179993420'/0'/0/4
    await walletManager.addAccount();
    // Add account m/44'/1179993420'/0'/0/5
    await walletManager.addAccount();

    const accounts = walletManager.getAccounts();
    // Match account m/44'/1179993420'/0'/0/0
    expect(accounts[0].publicKey).toBe(WalletManagerSpec.account_0.publicKey);
    // Match account m/44'/1179993420'/0'/0/5
    expect(accounts[5].publicKey).toBe(WalletManagerSpec.account_5.publicKey);
    expect(accounts.length).toBe(6);

    // Make sure data is loaded from storage correctly
    await walletManager.lock();
    await walletManager.unlock(password);
    expect(accounts[0].publicKey).toBe(WalletManagerSpec.account_0.publicKey);
    expect(accounts[5].publicKey).toBe(WalletManagerSpec.account_5.publicKey);
    expect(accounts.length).toBe(6);
  });

  it('Create account with privateKey', async () => {
    const wallet = Wallet.generate();
    const { walletManager } = await setupWallet({
      type: 'privateKey',
      secret: wallet.privateKey,
    });

    const accounts = walletManager.getAccounts();
    expect(accounts[0].publicKey).toBe(wallet.publicKey);
    expect(accounts.length).toBe(1);
  });

  it('Test shared storage storage', async () => {
    const storage = new MemoryStorage();
    const walletManager = new WalletManager({
      storage,
    });
    const walletManager2 = new WalletManager({
      storage,
    });
    const password = '0b540281-f87b-49ca-be37-2264c7f260f7';

    await walletManager.unlock(password);
    await walletManager.addVault({
      type: 'mnemonic',
      secret: WalletManagerSpec.mnemonic,
    });

    const accounts = walletManager.getAccounts();

    await walletManager2.unlock(password);
    const accounts2 = walletManager2.getAccounts();

    expect(accounts[0].publicKey).toBe(accounts2[0].publicKey);
    expect(accounts.length).toBe(accounts2.length);
  });

  it('Export privateKey from address from a privateKey vault', async () => {
    const walletManager = new WalletManager();
    const password = '0b540281-f87b-49ca-be37-2264c7f260f7';
    const wallet = Wallet.generate();

    await walletManager.unlock(password);

    // Add a vault of type privateKey
    await walletManager.addVault({
      type: 'privateKey',
      secret: wallet.privateKey,
    });

    const privateKeyReturned = walletManager.exportPrivateKey(wallet.address);

    expect(privateKeyReturned).toBe(wallet.privateKey);
  });

  it('Export privateKey from address from a mnemonic vault', async () => {
    const { walletManager } = await setupWallet({
      type: 'mnemonic',
      secret: WalletManagerSpec.mnemonic,
    });
    const accounts = walletManager.getAccounts();

    const privateKeyReturned = walletManager.exportPrivateKey(accounts[0].address);

    expect(privateKeyReturned).toBe(WalletManagerSpec.account_0.privateKey);
  });

  it('Export privateKey from address from a mnemonic vault', async () => {
    const { walletManager } = await setupWallet({
      type: 'mnemonic',
      secret: WalletManagerSpec.mnemonic,
    });

    await walletManager.removeVault(0);
    const vaults = walletManager.getVaults();
    const accounts = walletManager.getAccounts();

    expect(vaults.length).toBe(0);
    expect(accounts.length).toBe(0);
  });

  it('Test wallet multiple vaults', async () => {
    const wallet = Wallet.generate();
    // Setup wallet with MnemonicVault
    const { walletManager } = await setupWallet({
      type: 'mnemonic',
      secret: WalletManagerSpec.mnemonic,
    });
    // Add PrivateKeyVault to the Wallet
    await walletManager.addVault({
      type: 'privateKey',
      secret: wallet.privateKey,
    });
    // Accounts
    const accounts = walletManager.getAccounts();

    await walletManager.addAccount({
      vaultIndex: 0,
    });
    await walletManager.addAccount({
      vaultIndex: 1,
    });

    expect(accounts[0].publicKey).toBe(WalletManagerSpec.account_0.publicKey);
    expect(accounts[1].publicKey).toBe(wallet.publicKey);
  });

  it('Test asserts on method calls', async () => {
    const walletManager = new WalletManager();
    const password = '0b540281-f87b-49ca-be37-2264c7f260f7';

    const addMnemonic = async () => {
      await walletManager.addVault({
        type: 'mnemonic',
        secret: WalletManagerSpec.mnemonic,
      });
    };

    // Test if methods only work if wallet is unlocked
    await expect(addMnemonic()).rejects.toThrow('Wallet is locked');
    await expect(walletManager.loadState()).rejects.toThrow('Wallet is locked');
    expect(() => walletManager.exportPrivateKey(Address.fromRandom())).toThrow('Wallet is locked');
    // Unlock wallet and add a vault
    await walletManager.unlock(password);
    await addMnemonic();
    // Test methods that should not find an address
    expect(() => walletManager.getWallet(Address.fromRandom())).toThrow('Address not found');
    expect(() => walletManager.exportPrivateKey(Address.fromRandom())).toThrow('Address not found');
    // Test methods that should throw id not found vault or vaultType
    await expect(
      walletManager.addVault({
        type: 'foobar',
      })
    ).rejects.toThrow('Invalid VaultType');
    await expect(
      walletManager.addAccount({
        vaultIndex: 1,
      })
    ).rejects.toThrow('Vault not found');
  });

  it('Test if vault secret can be leaked', async () => {
    const { walletManager } = await setupWallet({
      type: 'mnemonic',
      secret: WalletManagerSpec.mnemonic,
    });

    expect(JSON.stringify(walletManager)).not.toContain(WalletManagerSpec.mnemonic);
    expect(JSON.stringify(walletManager.getVaults())).not.toContain(WalletManagerSpec.mnemonic);
  });

  it('Create vault with custom name', async () => {
    const { walletManager } = await setupWallet({
      type: 'mnemonic',
      title: 'My Custom Vault Name',
      secret: WalletManagerSpec.mnemonic,
    });

    const vaults = walletManager.getVaults();

    expect(vaults[0]).toEqual({
      title: 'My Custom Vault Name',
      type: 'mnemonic',
    });
    expect(vaults.length).toBe(1);
  });

  it('Get Wallet instance from address', async () => {
    const { walletManager } = await setupWallet({
      type: 'mnemonic',
      secret: WalletManagerSpec.mnemonic,
    });
    const accounts = walletManager.getAccounts();
    // Get Wallet instance
    const wallet = walletManager.getWallet(accounts[0].address);
    // Sign message
    const signedMessage = wallet.signMessage('hello');
    // Verify signedMessage is the same from account 0
    const address = Signer.recoverAddress(hashMessage('hello'), signedMessage);
    expect(address).toEqual(accounts[0].address);
  });

  it('Test WalletManager events', async () => {
    const { walletManager, password } = await setupWallet({
      type: 'mnemonic',
      secret: WalletManagerSpec.mnemonic,
    });
    // Create object with methods to be able to
    // use Jest.spyOn
    const listeners = {
      onLock: () => {},
      onUnlock: () => {},
      onUpdate: () => {},
    };

    const apyLock = jest.spyOn(listeners, 'onLock');
    const spyUnlock = jest.spyOn(listeners, 'onUnlock');
    const spyUpdate = jest.spyOn(listeners, 'onUpdate');

    walletManager.on('update', listeners.onUpdate);
    walletManager.on('lock', listeners.onLock);
    await walletManager.lock();
    expect(apyLock).toHaveBeenCalled();

    walletManager.on('unlock', listeners.onUnlock);
    await walletManager.unlock(password);
    expect(spyUnlock).toHaveBeenCalled();

    await walletManager.addAccount();
    await walletManager.removeVault(1);
    expect(spyUpdate.mock.calls.length).toEqual(2);
  });
});

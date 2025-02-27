import type { AbstractAddress } from '@fuel-ts/interfaces';
import { Mnemonic } from '@fuel-ts/mnemonic';
import { Wallet } from '@fuel-ts/wallet';

import type { Vault } from '../types';

interface MnemonicVaultOptions {
  secret?: string;
  rootPath?: string;
  numberOfAccounts?: number | null;
}

export class MnemonicVault implements Vault<MnemonicVaultOptions> {
  static readonly type = 'mnemonic';
  readonly #secret: string;

  pathKey = '{}';
  rootPath: string = `m/44'/1179993420'/${this.pathKey}'/0/0`;
  numberOfAccounts: number = 0;

  constructor(options: MnemonicVaultOptions) {
    this.#secret = options.secret || Mnemonic.generate();
    this.rootPath = options.rootPath || this.rootPath;
    // On creating the vault also adds one account
    this.numberOfAccounts = options.numberOfAccounts || 1;
  }

  getDerivePath(index: number) {
    if (this.rootPath.includes(this.pathKey)) {
      return this.rootPath.replace(this.pathKey, String(index));
    }
    return `${this.rootPath}/${index}`;
  }

  serialize(): MnemonicVaultOptions {
    return {
      secret: this.#secret,
      rootPath: this.rootPath,
      numberOfAccounts: this.numberOfAccounts,
    };
  }

  getAccounts() {
    const accounts = [];
    let numberOfAccounts = 0;

    // Create all accounts to current vault
    do {
      const wallet = Wallet.fromMnemonic(this.#secret, this.getDerivePath(numberOfAccounts));
      accounts.push({
        publicKey: wallet.publicKey,
        address: wallet.address,
      });
      numberOfAccounts += 1;
    } while (numberOfAccounts < this.numberOfAccounts);

    return accounts;
  }

  addAccount() {
    this.numberOfAccounts += 1;
    const wallet = Wallet.fromMnemonic(this.#secret, this.getDerivePath(this.numberOfAccounts));

    return {
      publicKey: wallet.publicKey,
      address: wallet.address,
    };
  }

  exportAccount(address: AbstractAddress): string {
    let numberOfAccounts = 0;

    // Look for the account that has the same address
    do {
      const wallet = Wallet.fromMnemonic(this.#secret, this.getDerivePath(numberOfAccounts));
      if (wallet.address.equals(address)) {
        return wallet.privateKey;
      }
      numberOfAccounts += 1;
    } while (numberOfAccounts < this.numberOfAccounts);

    throw new Error('Account not found');
  }

  getWallet(address: AbstractAddress): Wallet {
    const privateKey = this.exportAccount(address);
    return new Wallet(privateKey);
  }
}

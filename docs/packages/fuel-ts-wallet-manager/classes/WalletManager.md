---
layout: default
title: WalletManager
parent: "@fuel-ts/wallet-manager"
nav_order: 1

---

# Class: WalletManager

[@fuel-ts/wallet-manager](../index.md).WalletManager

WalletManager is a upper package to manage multiple vaults like mnemonic and privateKeys.

- VaultTypes can be add to `WalletManager.Vaults` enabling to add custom Vault types.
- Storage can be instantiate when initializing enabling custom storage types.

## Hierarchy

- `EventEmitter`

  ↳ **`WalletManager`**

## Constructors

### constructor

• **new WalletManager**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`WalletManagerOptions`](../namespaces/internal.md#walletmanageroptions) |

#### Overrides

EventEmitter.constructor

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:67](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L67)

## Properties

### #isLocked

• `Private` **#isLocked**: `boolean` = `true`

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:65](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L65)

___

### #passphrase

• `Private` **#passphrase**: `string` = `''`

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:64](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L64)

___

### #vaults

• `Private` **#vaults**: [`VaultsState`](../namespaces/internal.md#vaultsstate) = `[]`

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:63](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L63)

___

### STORAGE\_KEY

• `Readonly` **STORAGE\_KEY**: `string` = `'WalletManager'`

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:60](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L60)

___

### storage

• `Readonly` **storage**: [`StorageAbstract`](internal-StorageAbstract.md)

Storage

Persistent encrypted data. `The default storage works only on memory`.

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:58](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L58)

___

### Vaults

▪ `Static` **Vaults**: (typeof [`MnemonicVault`](internal-MnemonicVault.md) \| typeof [`PrivateKeyVault`](internal-PrivateKeyVault.md))[]

Vaults

Vaults are responsible to store secret keys and return an `Wallet` instance,
to interact with the network.

Each vault has access to its own state

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:52](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L52)

## Accessors

### isLocked

• `get` **isLocked**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:72](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L72)

## Methods

### #deserializeVaults

▸ `Private` **#deserializeVaults**(`vaults`): { `title`: `undefined` \| `string` ; `type`: `string` ; `vault`: [`MnemonicVault`](internal-MnemonicVault.md) \| [`PrivateKeyVault`](internal-PrivateKeyVault.md)  }[]

Deserialize all vaults to state

`This is only accessible from inside the class`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaults` | [`VaultsState`](../namespaces/internal.md#vaultsstate) |

#### Returns

{ `title`: `undefined` \| `string` ; `type`: `string` ; `vault`: [`MnemonicVault`](internal-MnemonicVault.md) \| [`PrivateKeyVault`](internal-PrivateKeyVault.md)  }[]

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:241](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L241)

___

### #serializeVaults

▸ `Private` **#serializeVaults**(`vaults`): { `data`: { `secret?`: `string`  } ; `title`: `undefined` \| `string` ; `type`: `string`  }[]

Serialize all vaults to store

`This is only accessible from inside the class`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaults` | [`VaultsState`](../namespaces/internal.md#vaultsstate) |

#### Returns

{ `data`: { `secret?`: `string`  } ; `title`: `undefined` \| `string` ; `type`: `string`  }[]

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:228](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L228)

___

### addAccount

▸ **addAccount**(`options?`): `Promise`<`void`\>

Add account to a selected vault or on the first vault as default.
If not vaults are adds it will return error

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.vaultIndex` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:126](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L126)

___

### addVault

▸ **addVault**(`vaultConfig`): `Promise`<`void`\>

Add Vault, the `vaultConfig.type` will look for the Vaults supported if
didn't found it will throw.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultConfig` | [`VaultConfig`](../namespaces/internal.md#vaultconfig) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:151](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L151)

___

### exportPrivateKey

▸ **exportPrivateKey**(`address`): `string`

Export specific account privateKey

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`AbstractAddress`](internal-AbstractAddress.md) |

#### Returns

`string`

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:112](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L112)

___

### getAccounts

▸ **getAccounts**(): [`Account`](../namespaces/internal.md#account)[]

List all accounts on the Wallet Manager not vault information is revealed

#### Returns

[`Account`](../namespaces/internal.md#account)[]

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:89](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L89)

___

### getVaultClass

▸ `Private` **getVaultClass**(`type`): typeof [`MnemonicVault`](internal-MnemonicVault.md) \| typeof [`PrivateKeyVault`](internal-PrivateKeyVault.md)

Return a instantiable Class reference from `WalletManager.Vaults` supported list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

typeof [`MnemonicVault`](internal-MnemonicVault.md) \| typeof [`PrivateKeyVault`](internal-PrivateKeyVault.md)

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:255](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L255)

___

### getVaults

▸ **getVaults**(): { `title?`: `string` ; `type`: `string`  }[]

List all vaults on the Wallet Manager, this function nto return secret's

#### Returns

{ `title?`: `string` ; `type`: `string`  }[]

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:79](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L79)

___

### getWallet

▸ **getWallet**(`address`): `default`

Create a Wallet instance for the specific account

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`AbstractAddress`](internal-AbstractAddress.md) |

#### Returns

`default`

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:100](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L100)

___

### loadState

▸ **loadState**(): `Promise`<`void`\>

Retrieve and decrypt WalletManager state from storage

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:200](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L200)

___

### lock

▸ **lock**(): `Promise`<`void`\>

Lock wallet. It removes passphrase from class instance, encrypt and hide all address and
secrets.

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:172](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L172)

___

### removeVault

▸ **removeVault**(`index`): `Promise`<`void`\>

Remove vault by index, by remove the vault you also remove all accounts
created by the vault.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:142](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L142)

___

### saveState

▸ `Private` **saveState**(): `Promise`<`void`\>

Store encrypted WalletManager state on storage

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:213](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L213)

___

### unlock

▸ **unlock**(`passphrase`): `Promise`<`void`\>

Unlock wallet. It sets passphrase on WalletManger instance load all address from configured vaults.
Vaults with secrets are not unlocked or instantiated on this moment.

#### Parameters

| Name | Type |
| :------ | :------ |
| `passphrase` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/wallet-manager/src/wallet-manager.ts:186](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.ts#L186)

---
layout: default
title: CreateTransactionRequest
parent: "@fuel-ts/wallet"
nav_order: 1

---

# Class: CreateTransactionRequest

[@fuel-ts/wallet](../index.md).[internal](../namespaces/internal.md).CreateTransactionRequest

## Hierarchy

- [`BaseTransactionRequest`](internal-BaseTransactionRequest.md)

  ↳ **`CreateTransactionRequest`**

## Constructors

### constructor

• **new CreateTransactionRequest**(`__namedParameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`CreateTransactionRequestLike`](../interfaces/internal-CreateTransactionRequestLike.md) |

#### Overrides

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[constructor](internal-BaseTransactionRequest.md#constructor)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:477](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L477)

## Properties

### bytePrice

• **bytePrice**: `bigint`

Price per transaction byte

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[bytePrice](internal-BaseTransactionRequest.md#byteprice)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:112](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L112)

___

### bytecodeWitnessIndex

• **bytecodeWitnessIndex**: `number`

Witness index of contract bytecode to create

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:469](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L469)

___

### gasLimit

• **gasLimit**: `bigint`

Gas limit for transaction

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[gasLimit](internal-BaseTransactionRequest.md#gaslimit)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:110](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L110)

___

### gasPrice

• **gasPrice**: `bigint`

Gas price for transaction

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[gasPrice](internal-BaseTransactionRequest.md#gasprice)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:108](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L108)

___

### inputs

• **inputs**: [`TransactionRequestInput`](../namespaces/internal.md#transactionrequestinput)[] = `[]`

List of inputs

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[inputs](internal-BaseTransactionRequest.md#inputs)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:116](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L116)

___

### maturity

• **maturity**: `bigint`

Block until which tx cannot be included

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[maturity](internal-BaseTransactionRequest.md#maturity)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:114](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L114)

___

### outputs

• **outputs**: [`TransactionRequestOutput`](../namespaces/internal.md#transactionrequestoutput)[] = `[]`

List of outputs

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[outputs](internal-BaseTransactionRequest.md#outputs)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:118](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L118)

___

### salt

• **salt**: `string`

Salt

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:471](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L471)

___

### staticContracts

• **staticContracts**: `string`[]

List of static contracts

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:473](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L473)

___

### storageSlots

• **storageSlots**: [`TransactionRequestStorageSlot`](../namespaces/internal.md#transactionrequeststorageslot)[]

List of storage slots to initialize

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:475](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L475)

___

### type

• **type**: [`Create`](../namespaces/internal.md#create)

Type of the transaction

#### Overrides

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[type](internal-BaseTransactionRequest.md#type)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:467](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L467)

___

### witnesses

• **witnesses**: `BytesLike`[] = `[]`

List of witnesses

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[witnesses](internal-BaseTransactionRequest.md#witnesses)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:120](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L120)

## Methods

### addCoin

▸ **addCoin**(`coin`): `void`

Converts the given Coin to a CoinInput with the appropriate witnessIndex and pushes it

#### Parameters

| Name | Type |
| :------ | :------ |
| `coin` | [`Coin`](../namespaces/internal.md#coin-2) |

#### Returns

`void`

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[addCoin](internal-BaseTransactionRequest.md#addcoin)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:248](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L248)

___

### addCoinOutput

▸ **addCoinOutput**(`to`, `amount`, `assetId?`): `void`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `to` | [`AddressLike`](../namespaces/internal.md#addresslike) | `undefined` | Address of the destination |
| `amount` | [`BigNumberish`](../namespaces/internal.md#bignumberish) | `undefined` | Amount of coins |
| `assetId` | `BytesLike` | `NativeAssetId` | Asset ID of coins |

#### Returns

`void`

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[addCoinOutput](internal-BaseTransactionRequest.md#addcoinoutput)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:287](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L287)

___

### addCoinOutputs

▸ **addCoinOutputs**(`to`, `quantities`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to` | [`AddressLike`](../namespaces/internal.md#addresslike) | Address of the destination |
| `quantities` | [`CoinQuantityLike`](../namespaces/internal.md#coinquantitylike)[] | Quantities of coins |

#### Returns

`void`

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[addCoinOutputs](internal-BaseTransactionRequest.md#addcoinoutputs)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:303](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L303)

___

### addCoins

▸ **addCoins**(`coins`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coins` | readonly [`Coin`](../namespaces/internal.md#coin-2)[] |

#### Returns

`void`

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[addCoins](internal-BaseTransactionRequest.md#addcoins)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:283](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L283)

___

### addContractCreatedOutput

▸ **addContractCreatedOutput**(`contractId`, `stateRoot`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contractId` | `BytesLike` | Contract ID |
| `stateRoot` | `BytesLike` | State Root |

#### Returns

`void`

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:516](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L516)

___

### byteSize

▸ **byteSize**(): `number`

#### Returns

`number`

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[byteSize](internal-BaseTransactionRequest.md#bytesize)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:319](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L319)

___

### calculateFee

▸ **calculateFee**(): [`CoinQuantity`](../namespaces/internal.md#coinquantity)

Return the minimum amount in native coins required to create
a transaction.

Note: this is required even if the gasPrice and bytePrice
are set to zero.

#### Returns

[`CoinQuantity`](../namespaces/internal.md#coinquantity)

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[calculateFee](internal-BaseTransactionRequest.md#calculatefee)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:335](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L335)

___

### chargeableByteSize

▸ **chargeableByteSize**(): `bigint`

#### Returns

`bigint`

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[chargeableByteSize](internal-BaseTransactionRequest.md#chargeablebytesize)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:323](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L323)

___

### createWitness

▸ `Protected` **createWitness**(): `number`

Creates an empty witness without any side effects and returns the index

#### Returns

`number`

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[createWitness](internal-BaseTransactionRequest.md#createwitness)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:186](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L186)

___

### getBaseTransaction

▸ `Protected` **getBaseTransaction**(): `Pick`<[`Transaction`](../namespaces/internal.md#transaction), keyof [`BaseTransactionRequestLike`](../interfaces/internal-BaseTransactionRequestLike.md) \| ``"inputsCount"`` \| ``"outputsCount"`` \| ``"witnessesCount"``\>

#### Returns

`Pick`<[`Transaction`](../namespaces/internal.md#transaction), keyof [`BaseTransactionRequestLike`](../interfaces/internal-BaseTransactionRequestLike.md) \| ``"inputsCount"`` \| ``"outputsCount"`` \| ``"witnessesCount"``\>

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[getBaseTransaction](internal-BaseTransactionRequest.md#getbasetransaction)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:140](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L140)

___

### getChangeOutputs

▸ **getChangeOutputs**(): [`ChangeTransactionRequestOutput`](../namespaces/internal.md#changetransactionrequestoutput)[]

#### Returns

[`ChangeTransactionRequestOutput`](../namespaces/internal.md#changetransactionrequestoutput)[]

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[getChangeOutputs](internal-BaseTransactionRequest.md#getchangeoutputs)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:213](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L213)

___

### getCoinInputWitnessIndexByOwner

▸ **getCoinInputWitnessIndexByOwner**(`owner`): ``null`` \| `number`

Returns the witnessIndex of the found CoinInput

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | [`AddressLike`](../namespaces/internal.md#addresslike) |

#### Returns

``null`` \| `number`

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[getCoinInputWitnessIndexByOwner](internal-BaseTransactionRequest.md#getcoininputwitnessindexbyowner)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:222](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L222)

___

### getCoinInputs

▸ **getCoinInputs**(): [`CoinTransactionRequestInput`](../namespaces/internal.md#cointransactionrequestinput)[]

#### Returns

[`CoinTransactionRequestInput`](../namespaces/internal.md#cointransactionrequestinput)[]

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[getCoinInputs](internal-BaseTransactionRequest.md#getcoininputs)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:201](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L201)

___

### getCoinOutputs

▸ **getCoinOutputs**(): [`CoinTransactionRequestOutput`](../namespaces/internal.md#cointransactionrequestoutput)[]

#### Returns

[`CoinTransactionRequestOutput`](../namespaces/internal.md#cointransactionrequestoutput)[]

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[getCoinOutputs](internal-BaseTransactionRequest.md#getcoinoutputs)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:207](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L207)

___

### getContractCreatedOutputs

▸ **getContractCreatedOutputs**(): [`ContractCreatedTransactionRequestOutput`](../namespaces/internal.md#contractcreatedtransactionrequestoutput)[]

#### Returns

[`ContractCreatedTransactionRequestOutput`](../namespaces/internal.md#contractcreatedtransactionrequestoutput)[]

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:509](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L509)

___

### pushInput

▸ `Protected` **pushInput**(`input`): `number`

Pushes an input to the list without any side effects and returns the index

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`TransactionRequestInput`](../namespaces/internal.md#transactionrequestinput) |

#### Returns

`number`

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[pushInput](internal-BaseTransactionRequest.md#pushinput)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:170](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L170)

___

### pushOutput

▸ `Protected` **pushOutput**(`output`): `number`

Pushes an output to the list without any side effects and returns the index

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | [`TransactionRequestOutput`](../namespaces/internal.md#transactionrequestoutput) |

#### Returns

`number`

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[pushOutput](internal-BaseTransactionRequest.md#pushoutput)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:178](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L178)

___

### toTransaction

▸ **toTransaction**(): [`Transaction`](../namespaces/internal.md#transaction)

#### Returns

[`Transaction`](../namespaces/internal.md#transaction)

#### Overrides

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[toTransaction](internal-BaseTransactionRequest.md#totransaction)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:491](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L491)

___

### toTransactionBytes

▸ **toTransactionBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[toTransactionBytes](internal-BaseTransactionRequest.md#totransactionbytes)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:163](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L163)

___

### updateWitness

▸ **updateWitness**(`index`, `witness`): `void`

Updates an existing witness without any side effects

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `witness` | `BytesLike` |

#### Returns

`void`

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[updateWitness](internal-BaseTransactionRequest.md#updatewitness)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:194](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L194)

___

### updateWitnessByCoinInputOwner

▸ **updateWitnessByCoinInputOwner**(`owner`, `witness`): `void`

Updates the witness for the given CoinInput owner

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | [`AddressLike`](../namespaces/internal.md#addresslike) |
| `witness` | `BytesLike` |

#### Returns

`void`

#### Inherited from

[BaseTransactionRequest](internal-BaseTransactionRequest.md).[updateWitnessByCoinInputOwner](internal-BaseTransactionRequest.md#updatewitnessbycoininputowner)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:235](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L235)

___

### from

▸ `Static` **from**(`obj`): [`CreateTransactionRequest`](internal-CreateTransactionRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`CreateTransactionRequestLike`](../interfaces/internal-CreateTransactionRequestLike.md) |

#### Returns

[`CreateTransactionRequest`](internal-CreateTransactionRequest.md)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:459](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L459)

import { toHex } from '@fuel-ts/math';
import { readFileSync } from 'fs';
import { join } from 'path';

import { setup } from '../test-utils';

import abiJSON from './out/debug/generic-types-contract-flat-abi.json';

const contractBytecode = readFileSync(join(__dirname, './out/debug/generic-types-contract.bin'));

describe('GenericTypesContract', () => {
  it('should call complex contract function with generic type', async () => {
    const contract = await setup({
      abi: abiJSON,
      contractBytecode,
    });

    const b256 = '0xd5579c46dfcc7f18207013e65b44e4cb4e2c2298f4ac457ba8f82743f31e930b';
    const bimArg1 = 'Yes';
    const { value } = await contract.functions
      .generic_type_function(
        [
          {
            bim: bimArg1,
            bam: {
              Foo: 100,
            },
          },
          {
            bim: bimArg1,
            bam: {
              Bar: { value: true },
            },
          },
          {
            bim: bimArg1,
            bam: {
              Din: { value: true },
            },
          },
        ],
        [
          {
            bim: [b256, b256, b256],
            bam: {
              Foo: 100,
            },
          },
          {
            bim: [b256, b256, b256],
            bam: {
              Bar: { value: true },
            },
          },
          {
            bim: [b256, b256, b256],
            bam: {
              Din: { value: true },
            },
          },
        ],
        {
          bim: 100,
          bam: {
            Din: 'Yes',
          },
        },
        {
          bim: { value: true },
          bam: {
            Din: 100,
          },
        }
      )
      .call();

    const arg1 = {
      bim: toHex(1),
      bam: true,
      never_used: toHex(2),
      foo: {
        x: b256,
        b: toHex(32),
      },
      foo_list: new Array(10).fill(b256),
    };
    const arg2 = {
      bim: toHex(1),
      bam: 2,
      never_used: toHex(3),
      foo: {
        x: {
          x: toHex(21),
          b: toHex(22),
        },
        b: toHex(32),
      },
      foo_list: new Array(10).fill({
        x: toHex(31),
        b: toHex(32),
      }),
    };
    const { value: call2 } = await contract.functions
      .generic_complex_type_function(arg1, arg2)
      .call();

    expect(value).toEqual(bimArg1);
    expect(JSON.stringify([arg1, arg2])).toEqual(JSON.stringify(call2));
  });
});

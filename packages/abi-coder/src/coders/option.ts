import type Coder from './abstract-coder';
import type { InputValueOf, DecodedValueOf } from './enum';
import EnumCoder from './enum';

type Option<T> = T | undefined;
type SwayOption<T> = { None: [] } | { Some: T };

export default class OptionCoder<TCoders extends Record<string, Coder>> extends EnumCoder<TCoders> {
  encode(value: InputValueOf<TCoders>): Uint8Array {
    const result = super.encode(this.toSwayOption(value) as unknown as InputValueOf<TCoders>);
    return result;
  }

  toSwayOption(input: InputValueOf<TCoders>): SwayOption<unknown> {
    if (input !== undefined) {
      return { Some: input };
    }

    return { None: [] };
  }

  decode(data: Uint8Array, offset: number): [DecodedValueOf<TCoders>, number] {
    const [decoded, newOffset] = super.decode(data, offset);
    return [this.toOption(decoded) as DecodedValueOf<TCoders>, newOffset];
  }

  toOption(output?: DecodedValueOf<TCoders>): Option<unknown> {
    if (output && 'Some' in output) {
      return output.Some;
    }

    return undefined;
  }
}

import {NullableNumber, NullableString} from '@acamp/lib/shared/tools';

export interface SpecialInputConfig {
  label: NullableString;
  numbersOnly: boolean;
  maxLength: NullableNumber;
}

export const defaultSpecialInputConfig: SpecialInputConfig = {
  label: null,
  numbersOnly: false,
  maxLength: null
};

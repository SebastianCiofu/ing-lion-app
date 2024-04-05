import { Required } from '@lion/form-core';

class CustomRequired extends Required {
  static get validatorName() {
    return 'custom-required';
  }

  static async getMessage() {
    return 'This field is mandatory';
  }
}

export { CustomRequired };

import { LionInput } from '@lion/input';
import { CustomRequired } from '../../validators/custom-required.js';
import { inputStyles } from './inputStyles.js';

class IngInput extends LionInput {
  static get properties() {
    return {
      ...super.properties,
    };
  }

  static get styles() {
    return [
      ...super.styles,
      inputStyles
    ];
  }

  constructor() {
    super();
    this.defaultValidators.push(new CustomRequired());
  }
}

customElements.define('ing-input', IngInput);

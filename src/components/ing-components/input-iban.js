import { inputStyles } from './input.style.js';
import { LionInputIban } from '@lion/input-iban';

class IngIban extends LionInputIban {
  static get styles() {
    return [
      inputStyles,
    ];
  }
}

customElements.define('ing-input-iban', IngIban);

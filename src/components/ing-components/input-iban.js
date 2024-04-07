import { LionInputIban } from '@lion/input-iban';
import { inputStyles } from './input.style.js';

class IngIban extends LionInputIban {
  static get styles() {
    return [
      inputStyles,
    ];
  }
}

customElements.define('ing-input-iban', IngIban);

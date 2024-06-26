import { LionSwitch } from '@lion/ui/switch.js';
import { css } from 'lit';
import './switch-input.js';

class IngSwitch extends LionSwitch {
  static get styles() {
    return [
      css`
        :host {
          margin-right: 60px;
        }
      `,
    ];
  }

  get slots() {
    return {
      ...super.slots,
      input: () => document.createElement('ing-switch-input'),
    };
  }
}

customElements.define('ing-switch', IngSwitch);

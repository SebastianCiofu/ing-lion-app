import { LionSelectRich } from '@lion/ui/select-rich.js';
import { css } from 'lit';
import './select-invoker.js';

class IngSelect extends LionSelectRich {
  static get styles() {
    return [
      css`
  :host {
          display: block;
          margin-bottom: 10px;
        }

        ::slotted([slot="label"]) {
          margin-bottom: 6px;
          display: block;
        }
      `,
    ];
  }

  get slots() {
    return {
      ...super.slots,
      invoker: () => document.createElement('ing-select-invoker'),
    };
  }
}

customElements.define('ing-select', IngSelect);

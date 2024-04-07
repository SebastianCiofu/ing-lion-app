import { LionCheckbox } from '@lion/checkbox-group';
import { css } from 'lit';
import '@lion/checkbox-group/define';

class IngCheckbox extends LionCheckbox {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          gap: 4px;
        }

        ::slotted(input) {
          appearance: none;
          padding: 8px;
          border: 1px solid #ff6200;
          background-color: white;
          border-radius: 4px;
        }

        :host([checked]) ::slotted([slot='input']) {
          background-color: #ff6200;
        }
      `,
    ];
  }
}

customElements.define('ing-checkbox', IngCheckbox);

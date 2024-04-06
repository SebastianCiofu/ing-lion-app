import { LionSelectInvoker } from '@lion/select-rich';
import { css } from 'lit';

class IngSelectInvoker extends LionSelectInvoker {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          background-color: #ff6600;
          border-radius: 6px;
          color: white;
          padding: 0.5em 1em;
          cursor: pointer;
          border: none;
          display: flex;
          gap: 4px;
          width: 200px !important;
        }

        :host(:hover) {
          background-color: #ff6600d0;
        }

        ::slotted([slot="after"]) {
          font-size: 12px;
        }
      `,
    ];
  }
}

customElements.define('ing-select-invoker', IngSelectInvoker);

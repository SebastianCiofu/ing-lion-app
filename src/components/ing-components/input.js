import { LionInput } from '@lion/input';
import { css } from 'lit';
import { CustomRequired } from '../../validators/custom-required.js';

class IngInput extends LionInput {
  static get properties() {
    return {
      ...super.properties,
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          --lion-input-border-radius: 6px;
          --lion-input-background-color: white;
          --lion-input-border-color: #b6b6b6;
          --lion-input-border-color-hover: #707070;
          --lion-input-border-color-focus: #1a2b42;
          --lion-input-border-color-error: #ff1a1a;
          --lion-input-font-size: 16px;
          --lion-input-padding: 0.5em 1em;
        }

        ::slotted(input) {
          border-radius: var(--lion-input-border-radius);
          background-color: var(--lion-input-background-color);
          border: 1px solid var(--lion-input-border-color);
          font-size: var(--lion-input-font-size);
          padding: var(--lion-input-padding);
        }

        ::slotted(input:hover) {
          border-color: var(--lion-input-border-color-hover);
        }

        ::slotted(input:focus) {
          border-color: var(--lion-input-border-color-focus);
          outline: none; // Removes default focus outline
          box-shadow: 0 0 0 2px var(--lion-input-border-color-focus);
        }
      `,
    ];
  }

  constructor() {
    super();
    this.defaultValidators.push(new CustomRequired());
  }
}

customElements.define('ing-input', IngInput);

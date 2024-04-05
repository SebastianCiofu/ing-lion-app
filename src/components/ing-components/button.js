import { css } from 'lit';
import { LionButton } from '@lion/button';

class IngButton extends LionButton {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          background-color: #ff6600;
          color: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s ease-in-out, transform 0.1s ease-in-out;
        }

        :host(:hover) {
          background-color: #162233;
        }

        :host(:active) {
          transform: translateY(1px);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }

        :host(:focus:not([disabled])),
        :host(:focus-visible) {
          outline: none;
          box-shadow: 0 0 0 2px #1a2b42, 0 0 0 4px #ffffff;
        }

        :host([disabled]) {
          opacity: 0.6;
          cursor: default;
          box-shadow: none;
        }
      `,
    ];
  }
}

customElements.define('ing-button', IngButton);

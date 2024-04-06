import { LionSwitchButton } from '@lion/switch';
import { css } from 'lit';

class IngSwitchInput extends LionSwitchButton {
  static get styles() {
    return [
      super.styles,
      css`
       :host {
          margin-right: 60px;
        }

        .btn {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }

        .btn .switch-button__track {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: .4s;
          border-radius: 34px;
        }

        .btn .switch-button__thumb {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 30px;
          height: 30px;
          background-color: white;
          transition: .4s;
          border-radius: 50%;
        }

        :host([checked]) .btn .switch-button__track {
          background-color: #ff6200;
        }

        :host([checked]) .btn .switch-button__thumb {
          transform: translateX(26px);
        }
      `,
    ];
  }
}

customElements.define('ing-switch-input', IngSwitchInput);

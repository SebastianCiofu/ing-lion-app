import { LionSwitch } from '@lion/ui/switch.js';
import { css } from 'lit';

class IngSwitch extends LionSwitch {
  static get styles() {
    return [
      css`
      `,
    ];
  }
}

customElements.define('ing-switch', IngSwitch);

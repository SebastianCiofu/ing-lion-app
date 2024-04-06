import { LionDialog } from '@lion/dialog';
import { css } from 'lit';

class IngDialog extends LionDialog {
  static get styles() {
    return [
      css`
      `,
    ];
  }
}

customElements.define('ing-dialog', IngDialog);

import { LionCheckboxGroup } from '@lion/checkbox-group';
import { css } from 'lit';
import '@lion/checkbox-group/define';

class IngCheckboxGroup extends LionCheckboxGroup {
  static get styles() {
    return [
      css`
        :host {
          font-size: 18px;
        }
      `,
    ];
  }
}

customElements.define('ing-checkbox-group', IngCheckboxGroup);

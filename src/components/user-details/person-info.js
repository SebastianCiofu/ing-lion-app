import { LitElement, html } from 'lit';
import { userDetailsStyles } from './user-details.style.js';

import '@lion/form/define';
import '../ing-components/input.js';
import '../ing-components/button.js';
import '../ing-components/switch.js';
import '../ing-components/checkbox-group.js';
import '../ing-components/nav.js';
import '../ing-components/dialog.js';
import '../ing-components/input-iban.js';
import '@lion/ui/define/lion-calendar.js';
import '@lion/ui/define/lion-option.js';
import '../ing-components/select.js';

class IngPersonalInfo extends LitElement {
  static get styles() {
    return userDetailsStyles;
  }

  static get properties() {
    return {
      editPersonalInfo: { type: Boolean },
      user: { type: Object },
    };
  }

  constructor() {
    super();
    this.editPersonalInfo = false;
    this.user = {
      firstName: 'Joe',
      lastName: 'Doe',
      email: 'email@domain.com',
      iban: 'NL20INGB0001234567',
    };
  }

  get firstNameInput() {
    return this.shadowRoot.getElementById('firstNameInput');
  }

  get lastNameInput() {
    return this.shadowRoot.getElementById('lastNameInput');
  }

  get emailInput() {
    return this.shadowRoot.getElementById('emailInput');
  }

  get ibanInput() {
    return this.shadowRoot.getElementById('ibanInput');
  }

  _handleEdit() {
    this.editPersonalInfo = !this.editPersonalInfo;
  }

  _handleSave() {
    const dialog = this.shadowRoot.querySelector('ing-dialog');
    dialog.opened = true;
  }

  _confirmSave() {
    this.user.firstName = this.firstNameInput.value;
    this.user.lastName = this.lastNameInput.value;
    this.user.email = this.emailInput.value;
    this.user.iban = this.ibanInput.value;

    this._handleEdit();
    this.shadowRoot.querySelector('ing-dialog').opened = false;
  }

  _cancelSave() {
    this.shadowRoot.querySelector('ing-dialog').opened = false;
  }

  render() {
    return html`
      <h3>Personal Information</h3>

      ${this.editPersonalInfo
        ? html`
            <lion-form>
              <form>
                <ing-input
                  .modelValue=${this.user.firstName}
                  id="firstNameInput"
                  name="firstName"
                  label="First Name"
                ></ing-input>
                <ing-input
                  .modelValue=${this.user.lastName}
                  id="lastNameInput"
                  name="lastName"
                  label="Last Name"
                ></ing-input>
                <ing-input
                  .modelValue=${this.user.email}
                  id="emailInput"
                  name="email"
                  label="Email"
                  type="email"
                ></ing-input>
                <ing-input-iban
                  .modelValue=${this.user.iban}
                  id="ibanInput"
                  name="iban"
                  label="IBAN"
                ></ing-input-iban>
              </form>
            </lion-form>

            <div class="button-container">
              <ing-button
                slot="invoker"
                @click=${this._handleSave}
                class="${this.darkMode ? 'btn-dark' : ''}"
                >Save Changes</ing-button
              >
              <ing-dialog>
                <div slot="content" class="dialog-content">
                  Are you sure you want to save changes?
                  <ing-button @click="${this._confirmSave}">Yes</ing-button>
                  <ing-button @click="${this._cancelSave}">No</ing-button>
                </div>
              </ing-dialog>
            </div>
          `
        : html`
            <p><strong>First Name: </strong>${this.user.firstName}</p>
            <p><strong>Last Name: </strong>${this.user.lastName}</p>
            <p><strong>Email: </strong> ${this.user.email}</p>
            <p><strong>IBAN: </strong> ${this.user.iban}</p>

            <div class="button-container">
              <ing-button
                @click=${this._handleEdit}
                class="${this.darkMode ? 'btn-dark' : ''}"
                >Edit</ing-button
              >
            </div>
          `}
    `;
  }
}

customElements.define('ing-personal-info', IngPersonalInfo);

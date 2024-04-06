import { LitElement, css, html } from 'lit';
import '@lion/form/define';
import '../ing-components/input.js';
import '../ing-components/button.js';
import '../ing-components/switch.js';
import '../ing-components/checkbox-group.js';
import '../ing-components/nav.js';

class IngUserDetails extends LitElement {
  static get styles() {
    return css`
      .container.light-mode {
        --bg-color: #f9f9f9;
        --text-color: #1a2b42;
      }

      .container.dark-mode {
        --bg-color: #1a2b42;
        --text-color: #ffffff;
      }

      .container {
        max-width: 800px;
        margin: 12px auto;
        padding: 20px;
        border: 1px solid lightgrey;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        background-color: var(--bg-color);
        color: var(--text-color);
      }

      h2 {
        color: #1a2b42;
      }

      .section {
        margin-bottom: 20px;
      }

      .button-container {
        margin-top: 20px;
        text-align: center;
      }

      .btn-dark {
        background-color: white;
        color: #1a2b42;
      }

      .chart {
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        background-color: #f5f5f5;
        padding: 20px;
        margin-bottom: 20px;
      }

      .chart-title {
        margin-bottom: 10px;
        font-size: 18px;
        color: #333;
      }

      .chart-content {
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .chart-content-dark {
        color: #1a2b42;
      }

      .settings {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
      }

      .setting-label {
        font-weight: bold;
      }

      .setting-toggle {
        margin-left: 20px;
      }
    `;
  }

  static get properties() {
    return {
      darkMode: { type: Boolean, reflect: true }, // Reflect the property to allow attribute binding
      editPersonalInfo: { type: Boolean },
      notifications: { type: Array },
      response: { type: Array },
      user: { type: Object }
    };
  }

  constructor() {
    super();
    this.darkMode = false; // Default to light mode
    this.editPersonalInfo = false;
    this.notifications = [
      { title: 'Deposit', value: 'DEP' },
      { title: 'Credit', value: 'CRE' },
      { title: 'Salary', value: 'SAL' },
    ];
    this.response = [];
    this.user = {
      firstName: 'Joe',
      lastName: 'Doe',
      email: 'email@domain.com'
    }
  }

  get firstNameInput() {
    return this.shadowRoot.getElementById("firstNameInput");
  }

  get lastNameInput() {
    return this.shadowRoot.getElementById("lastNameInput");
  }

  get emailInput() {
    return this.shadowRoot.getElementById("emailInput");
  }

  firstUpdated() {
    fetch('https://swapi.dev/api/people/')
      .then(r => r.json())
      .then(r => {
        this.response = r.results;
      });
  }

  _handleEdit() {
    this.editPersonalInfo = !this.editPersonalInfo;

  }

  _handleSave() {
    this.user.firstName = this.firstNameInput.value
    this.user.lastName = this.lastNameInput.value
    this.user.email = this.emailInput.value

    this.handleEdit();
  }

  _toggleDarkMode(event) {
    this.darkMode = event.target.checked;
  }

  render() {
    const { response } = this;

    return html`
      <ing-nav></ing-nav>
      <div class="container ${this.darkMode ? 'dark-mode' : 'light-mode'}">
        <h2>User Profile</h2>
        <div class="section">
          <h3>Personal Information</h3>

          ${this.editPersonalInfo
        ? html`
                <lion-form>
                  <form>
                    <ing-input id="firstNameInput" name="firstName" label="First Name"></ing-input>
                    <ing-input id="lastNameInput" name="lastName" label="Last Name"></ing-input>
                    <ing-input id="emailInput" name="email" label="Email"></ing-input>
                  </form>
                </lion-form>

                <div class="button-container">
                  <ing-button
                    @click=${this._handleSave}
                    class="${this.darkMode ? 'btn-dark' : ''}"
                    >Save Changes</ing-button
                  >
                </div>
              `
        : html`
                <p>First Name: ${this.user.firstName}</p>
                <p>Last Name: ${this.user.lastName}</p>
                <p>Email: ${this.user.email}</p>

                <div class="button-container">
                  <ing-button
                    @click=${this._handleEdit}
                    class="${this.darkMode ? 'btn-dark' : ''}"
                    >Edit</ing-button
                  >
                </div>
              `}
        </div>

        <div class="section">
          <h3>Friends</h3>
          <ul>
            ${response.map(item => html` <li>${item.name}</li> `)}
          </ul>
        </div>

        <div class="section">
          <h3>Account Details</h3>
        </div>

        <div class="section">
          <h3>Transaction History</h3>
        </div>

        <div class="chart section">
          <div class="chart-title">Balance Overview</div>
          <div
            class="chart-content ${this.darkMode ? 'chart-content-dark' : ''}"
          >
            Balance Chart
          </div>
        </div>

        <div class="chart section">
          <div class="chart-title">Spending Analysis</div>
          <div
            class="chart-content ${this.darkMode ? 'chart-content-dark' : ''}"
          >
            Spending Chart
          </div>
        </div>

        <div class="section">
          <h3>Settings</h3>
          <div class="settings">
            <span class="setting-label">Dark Mode</span>
            <ing-switch @click=${this._toggleDarkMode}></ing-switch>
          </div>
          <div class="settings">
            <span class="setting-label">Notifications</span>
            <ing-checkbox-group name="notifications[]" label="Notifications">
              ${this.notifications.map(
          notification =>
            html`
                    <lion-checkbox
                      label=${notification.title}
                      .choiceValue=${notification.value}
                    ></lion-checkbox>
                  `
        )}
            </ing-checkbox-group>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('ing-user-details', IngUserDetails);

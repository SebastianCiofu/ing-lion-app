/* eslint-disable class-methods-use-this */
import { LitElement, html } from 'lit';
import { userDetailsStyles } from './user-details.style.js';

import '@lion/form/define';
import '@lion/ui/define/lion-calendar.js';
import '@lion/ui/define/lion-option.js';
import '../ing-components/input.js';
import '../ing-components/button.js';
import '../ing-components/switch.js';
import '../ing-components/checkbox-group.js';
import '../ing-components/checkbox.js';
import '../ing-components/nav.js';
import '../ing-components/select.js';
import '../ing-components/spinner.js';
import './person-info.js';

class IngUserDetails extends LitElement {
  static get styles() {
    return userDetailsStyles;
  }

  static get properties() {
    return {
      darkMode: { type: Boolean },
      notifications: { type: Array },
      response: { type: Array },
      newAssociate: { type: String },
      selectedBusiness: { type: String },
      loading: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.darkMode = false; // Default to light mode
    this.notifications = [
      { title: 'Deposit', value: 'DEP' },
      { title: 'Credit', value: 'CRE' },
      { title: 'Salary', value: 'SAL' },
    ];
    this.response = [];
    this.newAssociate = '';
    this.selectedBusiness = '';
    this.loading = false;
  }

  firstUpdated() {
    fetch('https://swapi.dev/api/people/')
      .then(r => r.json())
      .then(r => {
        this.response = r.results.slice(0, 5);
        this.loading = false;
      });
  }

  _handleDelete(event) {
    const item = event.target.parentElement;
    item.remove();
  }

  _handleAddAssociate() {
    const associates = this.shadowRoot.querySelector('.friends-section ul');
    const li = document.createElement('li');
    const button = document.createElement('ing-button');

    button.textContent = 'Delete';
    button.classList.add('secondary__btn');
    button.addEventListener('click', this._handleDelete.bind(this));
    li.innerHTML = `<p>${this.shadowRoot.getElementById('newAssociateInput').value
      }</p>`;

    li.appendChild(button);
    associates.appendChild(li);
  }

  toggleDarkMode(event) {
    this.darkMode = event.target.checked;
  }

  _handleBusinessSelect(event) {
    this.selectedBusiness = event.target.value;
  }

  render() {
    const { response } = this;

    return html`
      <ing-nav></ing-nav>
      <div class="container ${this.darkMode ? 'dark-mode' : 'light-mode'}">
        <h2>User Profile</h2>

        <div class="section">
          <ing-personal-info></ing-personal-info>
        </div>

        <div class="section friends-section">
          <h3 class="${this.darkMode ? 'content-dark' : ''}">Associates</h3>
          <ul>
            ${this.loading
        ? html`<ing-spinner></ing-spinner>`
        : response.map(
          item => html` <li>
                    <p>${item.name}</p>
                    <ing-button
                      @click="${this._handleDelete}"
                      class="secondary__btn"
                      >Delete</ing-button
                    >
                  </li>`
        )}
          </ul>
          <ing-input
            .modelValue=${this.newAssociate}
            type="text"
            placeholder="New Associate"
            id="newAssociateInput"
          ></ing-input>
          <ing-button
            @click="${this._handleAddAssociate}"
            class="secondary__btn secondary__btn--add"
            >Add</ing-button
          >
        </div>

        <div class="section">
          <h3>Account Details</h3>
          <ing-select
            name="accountType"
            label="Account Type"
            @click="${this._handleBusinessSelect}"
          >
            <lion-option .choiceValue=${'personal'}>Personal</lion-option>
            <lion-option .choiceValue=${'business'}>Business</lion-option>
          </ing-select>
        </div>

        <div class="section">
          <h3>Transaction History</h3>
        </div>

        <div class="chart section">
          <div class="chart-title">Balance Overview</div>
          <div
            class="chart-content ${this.darkMode ? 'content-dark' : ''}"
          >
            Balance Chart
          </div>
        </div>

        <div class="chart section">
          <div class="chart-title">Spending Analysis</div>
          <div
            class="chart-content ${this.darkMode ? 'content-dark' : ''}"
          >
            Spending Chart
          </div>
        </div>

        <div class="section">
          <h3>Settings</h3>
          <div class="settings">
            <span class="setting-label">Dark Mode</span>
            <ing-switch @click=${this.toggleDarkMode} aria-label="Toggle dark mode"></ing-switch>
          </div>
          <div class="settings">
            <span class="setting-label">Notifications</span>
            <ing-checkbox-group name="notifications[]">
              ${this.notifications.map(
          notification =>
            html`
                    <ing-checkbox
                      label=${notification.title}
                      .choiceValue=${notification.value}
                    ></ing-checkbox>
                  `
        )}
            </ing-checkbox-group>
          </div>
        </div>

        <div class="section">
          <h3>Calendar</h3>

          <lion-calendar
            class="calendar"
            .selectedDate=${new Date()}
          ></lion-calendar>
        </div>
      </div>
    `;
  }
}

customElements.define('ing-user-details', IngUserDetails);

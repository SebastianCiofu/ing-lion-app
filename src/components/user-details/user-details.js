import { LitElement, css, html } from 'lit';
import '@lion/form/define';
import '../ing-components/input.js';
import '../ing-components/button.js';
import '../ing-components/switch.js';
import '../ing-components/checkbox-group.js';
import '../ing-components/nav.js'

class IngUserDetails extends LitElement {
  static get styles() {
    return css`
      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
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

  render() {
    return html`
      <ing-nav></ing-nav>
      <div class="container">
        <h2>User Profile</h2>
        <div class="section">
          <h3>Personal Information</h3>
          <lion-form>
            <form>
              <ing-input name="firstName" label="First Name"></ing-input>
              <ing-input name="lastName" label="Last Name"></ing-input>
              <ing-input name="email" label="Email"></ing-input>
            </form>
          </lion-form>
        </div>

        <div class="section">
          <h3>Account Details</h3>
        </div>

        <div class="section">
          <h3>Transaction History</h3>
        </div>

        <div class="chart section">
          <div class="chart-title">Balance Overview</div>
          <div class="chart-content">Balance Chart</div>
        </div>

        <div class="chart section">
          <div class="chart-title">Spending Analysis</div>
          <div class="chart-content">Spending Chart</div>
        </div>

        <div class="section">
          <h3>Settings</h3>
          <div class="settings">
            <span class="setting-label">Dark Mode</span>
            <ing-switch></ing-switch>
          </div>
          <div class="settings">
            <span class="setting-label">Notifications</span>
            <ing-checkbox-group name="numbers[]" label="Numbers">
              <lion-checkbox
                label="1"
                .choiceValue=${'1'}
              ></lion-checkbox>
              <lion-checkbox
                label="2"
                .choiceValue=${'2'}
              ></lion-checkbox>
              <lion-checkbox
                label="3"
                .choiceValue=${'3'}
              ></lion-checkbox>
            </ing-checkbox-group>
          </div>
        </div>

        <div class="button-container">
          <ing-button>Save Changes</ing-button>
        </div>
      </div>
    `;
  }
}

customElements.define('ing-user-details', IngUserDetails);

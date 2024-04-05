import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import '@lion/form/define';
import '../ing-components/input.js';
import '../ing-components/button.js';

class IngLogin extends LitElement {
  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        margin: 0 auto;
        text-align: center;
      }

      .login-form {
        width: 100%;
        max-width: 400px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 2rem;
        background: #ffffff;
      }

      ing-button, ing-input {
        margin-top: 1rem;
      }

      h1 {
        color: #ff6600;
      }
    `;
  }

  static get properties() {
    return {
      header: { type: String },
    };
  }

  constructor() {
    super();
    this.header = 'Login ING';
  }

  _handleLogin(event) {
    event.preventDefault();
    const form = this.shadowRoot.querySelector('lion-form');
    form.submit();

    if (form.hasFeedbackFor.includes('error')) {
      const firstInvalidInput = [...form.formElements]
        .find(input => input.hasFeedbackFor.includes('error'));

      firstInvalidInput.focus();
    } else {
      this.header = 'Logged In';
      localStorage.setItem('isLoggedIn', 'true');
      this.requestUpdate();
      Router.go('/user-details');
    }
  }

  render() {
    return html`
      <div class="login-form">
        <h1>${this.header}</h1>
        <lion-form>
          <form @submit=${ev => ev.preventDefault()}>
            <ing-input name="firstName" label="First Name"></ing-input>
            <ing-input name="lastName" label="Last Name"></ing-input>
          </form>
        </lion-form>
        <ing-button @click=${this._handleLogin}>Log In</ing-button>
      </div>
    `;
  }
}

customElements.define('ing-login', IngLogin);

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

      @media screen and (max-width: 500px) {
        .login-form {
          max-width: 300px;
        }
      }

      ing-button,
      ing-input {
        margin-top: 1rem;
      }

      h4 {
        color: #ff6600;
      }

      small {
        display: block;
        margin-top: 1rem;
        color: gray;
        font-size: 16px;
      }

      img {
        max-width: 300px;
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
    this.header = 'Login';
  }

  _handleLogin(event) {
    event.preventDefault();
    const form = this.shadowRoot.querySelector('lion-form');
    form.submit();

    if (form.hasFeedbackFor.includes('error')) {
      const firstInvalidInput = [...form.formElements].find(input =>
        input.hasFeedbackFor.includes('error')
      );

      firstInvalidInput.focus();
    } else {
      localStorage.setItem('isLoggedIn', 'true');
      this.requestUpdate();

      Router.go('/user-details');
    }
  }

  render() {
    return html`
      <div class="login-form">
        <img src="/assets/ing.svg" alt="ING Logo" />
        <h2>${this.header}</h2>
        <lion-form>
          <form @submit=${ev => ev.preventDefault()}>
            <ing-input
              type="email"
              name="email"
              label="Email"
              placeholder="email@domain.com"
            ></ing-input>
            <ing-input
              type="password"
              name="password"
              label="Password"
              placeholder="Password"
            ></ing-input>
          </form>
        </lion-form>
        <ing-button @click=${this._handleLogin}>Log In</ing-button>
        <small>&copy; Copyright</small>
      </div>
    `;
  }
}

customElements.define('ing-login', IngLogin);

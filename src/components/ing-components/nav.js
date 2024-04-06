import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import './button.js';

class IngNav extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        background-color: #f9f9f9;
        color: #fff;
        padding: 10px;
        position: sticky; /* Add this line */
        top: 0; /* Add this line */
        z-index: 99;
      }

      .nav__container {
        margin: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      img {
        width: 200px;
      }
    `;
  }

  _logout() {
    localStorage.setItem('isLoggedIn', 'false');

    history.replaceState({}, document.title, '/');

    Router.go('/');
  }

  render() {
    return html`
      <header>
        <div class="nav__container">
          <img src="/assets/ing.svg" alt="ING Logo" />
          <ing-button @click=${this._logout}>Logout</ing-button>
        </div>
      </header>
    `;
  }
}

customElements.define('ing-nav', IngNav);

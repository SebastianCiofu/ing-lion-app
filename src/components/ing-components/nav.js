/* eslint-disable no-restricted-globals */
/* eslint-disable class-methods-use-this */
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
        position: sticky;
        top: 0;
        z-index: 99;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      }

      .nav__container {
        margin: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      p{
        color: #ff6600;
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
          <p>Logo</p>
          <ing-button @click=${this._logout}>Logout</ing-button>
        </div>
      </header>
    `;
  }
}

customElements.define('ing-nav', IngNav);

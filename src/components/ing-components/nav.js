
import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import './button.js';

class IngNav extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        background-color: #1a2b42;
        color: #fff;
        padding: 10px;
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
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
        <h1>ING App</h1>
        <ing-button @click=${this._logout}>Logout</ing-button>
      </header>
    `;
  }
}

customElements.define('ing-nav', IngNav);

import { LitElement, html, css } from 'lit';

class IngNotFound extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      color: black;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `;

  render() {
    return html`
      <h1>404</h1>
      <img src="/assets/ing.svg" alt="ING Logo" />
      <h4>Page not found!</h4>
    `;
  }
}

customElements.define('ing-not-found', IngNotFound);

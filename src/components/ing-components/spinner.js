import { LitElement, html, css } from 'lit';

class IngSpinner extends LitElement {
  static get styles() {
    return css`
      .loader {
        width: 48px;
        height: 48px;
        border: 5px solid #ff6200;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        animation: rotation 1s linear infinite;
      }

      @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `;
  }

  render() {
    return html` <span class="loader"></span> `;
  }
}

customElements.define('ing-spinner', IngSpinner);

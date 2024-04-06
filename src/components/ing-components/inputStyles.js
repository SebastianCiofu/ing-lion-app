
import { css } from 'lit';

export const inputStyles = css`
  :host {
    --lion-input-border-radius: 6px;
    --lion-input-background-color: white;
    --lion-input-border-color: #b6b6b6;
    --lion-input-border-color-hover: #707070;
    --lion-input-border-color-focus: #1a2b42;
    --lion-input-border-color-error: #ff1a1a;
    --lion-input-font-size: 16px;
    --lion-input-padding: 0.5em 1em;
  }

  ::slotted(input) {
    border-radius: var(--lion-input-border-radius);
    background-color: var(--lion-input-background-color);
    border: 1px solid var(--lion-input-border-color);
    font-size: var(--lion-input-font-size);
    padding: var(--lion-input-padding);
  }

  ::slotted(input:hover) {
    border-color: var(--lion-input-border-color-hover);
  }

  ::slotted(label) {
    margin-bottom: 16px;
    display: block;
  }

  ::slotted([slot="feedback"]) {
  color: var(--lion-input-border-color-error);
  font-size: 24px
}

  ::slotted(input:focus) {
    border-color: var(--lion-input-border-color-focus);
    outline: none;
    box-shadow: 0 0 0 2px var(--lion-input-border-color-focus);
  }
`;

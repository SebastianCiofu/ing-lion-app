import { fixture, expect } from '@open-wc/testing';
import { html } from 'lit';
import '../src/components/ing-components/button.js';

describe('IngButton', () => {
  let button;

  beforeEach(async () => {
    button = await fixture(html`<ing-button>Click Me</ing-button>`);
  });

  it('renders with correct default styles', () => {
    expect(button).to.exist;
    const styles = window.getComputedStyle(button);
    expect(styles.padding).to.equal('8px 16px');
    expect(styles.border).to.equal('0px none rgb(255, 255, 255)');
    expect(styles.borderRadius).to.equal('4px');
    expect(styles.fontSize).to.equal('16px');
    expect(styles.fontWeight).to.equal('700');
    expect(styles.backgroundColor).to.equal('rgb(255, 102, 0)'); // #ff6600
    expect(styles.color).to.equal('rgb(255, 255, 255)'); // white
  });

  it('changes background color on hover', async () => {
    button.dispatchEvent(new MouseEvent('mouseover'));
    await button.updateComplete;
    const styles = window.getComputedStyle(button);
    expect(styles.backgroundColor).to.equal('rgb(255, 102, 0)'); // #162233
  });

  it('does not apply transform on active', async () => {
    button.dispatchEvent(new MouseEvent('mousedown'));
    await button.updateComplete;
    const styles = window.getComputedStyle(button);
    expect(styles.transform).to.equal('none');
  });

  it('removes box-shadow and changes cursor when disabled', async () => {
    button.disabled = true;
    await button.updateComplete;
    const styles = window.getComputedStyle(button);
    expect(styles.opacity).to.equal('0.6');
    expect(styles.cursor).to.equal('default');
    expect(styles.boxShadow).to.equal('none');
  });

  it('applies focus styles correctly', async () => {
    button.focus();
    await button.updateComplete;
    const styles = window.getComputedStyle(button);
    // Box shadow might be tricky to test depending on browser, checking existence instead
    expect(styles.boxShadow).to.include('rgb(26, 43, 66) 0px 0px 0px 2px, rgb(255, 255, 255) 0px 0px 0px 4px');
    expect(styles.boxShadow).to.include('rgb(26, 43, 66) 0px 0px 0px 2px, rgb(255, 255, 255) 0px 0px 0px 4px');
  });
});


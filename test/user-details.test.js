import { fixture, expect } from '@open-wc/testing';
import { html } from 'lit';
import '../src/components/user-details/user-details.js';

describe('IngUserDetails', () => {
  let element;
  let mockEvent;

  beforeEach(async () => {
    element = await fixture(html`<ing-user-details></ing-user-details>`);
    mockEvent = { target: { checked: false } };
  });

  it('starts with darkMode set to false', () => {
    expect(element.darkMode).to.be.false;
  });

  it('renders personal info section', () => {
    const personalInfo = element.shadowRoot.querySelector('ing-personal-info');
    expect(personalInfo).to.exist;
  });

  it('toggles dark mode to true when the event target checked is true', () => {
    mockEvent.target.checked = true;
    element.toggleDarkMode(mockEvent);
    expect(element.darkMode).to.be.true;
  });

  it('toggles dark mode to false when the event target checked is false', () => {
    mockEvent.target.checked = false;
    element.toggleDarkMode(mockEvent);
    expect(element.darkMode).to.be.false;
  });


  it('can add a new associate', async () => {
    const input = element.shadowRoot.getElementById('newAssociateInput');
    input.value = 'New Associate';
    element.shadowRoot.querySelector('.secondary__btn--add').click();
    await element.updateComplete;
    const associatesList = element.shadowRoot.querySelector('.friends-section ul');
    expect(associatesList.lastElementChild.textContent).to.contain('New Associate');
  });

  it('deletes an associate', async () => {
    element._handleAddAssociate();
    await element.updateComplete;

    const deleteButton = element.shadowRoot.querySelector('.secondary__btn');
    deleteButton.click();
    await element.updateComplete;

    const associatesList = element.shadowRoot.querySelector('.friends-section ul');
    expect(associatesList.children.length).to.equal(element.response.length);
  });

  it('handles business select', async () => {
    const select = element.shadowRoot.querySelector('ing-select[name="accountType"]');
    select.value = 'business';
    select.dispatchEvent(new Event('click'));
    await element.updateComplete;
    expect(element.selectedBusiness).to.equal('business');
  });

  it('applies the correct class for dark mode', async () => {
    const container = element.shadowRoot.querySelector('.container');
    expect(container.classList.contains('light-mode')).to.be.true;
    element.darkMode = true;
    await element.updateComplete;
    expect(container.classList.contains('dark-mode')).to.be.true;
  });
});


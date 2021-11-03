import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';

describe('LearningCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <learning-card
        type="science"
        header="science header"
        subheader="science subheader"
      >
        slotted content
      </learning-card>
    `);
  });

  it('renders a h2', () => {
    const h2 = element.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
    expect(h2.textContent).to.equal('science header');
  });

  it('renders a h3', () => {
    const h3 = element.shadowRoot.querySelector('h3');
    expect(h3).to.exist;
    expect(h3.textContent).to.equal('science subheader');
  });

  it('renders a slot', () => {
    const slot = element.shadowRoot.querySelector('slot');
    expect(slot).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});

import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/learning-icon.js';

describe('LearningIcon', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <learning-icon type="science"> </learning-icon>
    `);
  });

  it('renders an icon', () => {
    const icon = document.querySelector('learning-icon');
    expect(icon).to.exist;
  });

  it('renders an image', () => {
    const img = element.shadowRoot.querySelector('img');
    expect(img).to.exist;
    expect(img.src).to.contain('beaker.svg');
  });

  it('checks if icon changes based on type', () => {
    const img = element.shadowRoot.querySelector('img');

    element.type = 'science';
    expect(element.type).to.equal('science');
    expect(img.src).to.contain('beaker.svg');

    element.type = 'idea';
    setTimeout(() => {
      expect(element.type).to.equal('idea');
      expect(img.src).to.contain('lightbulb.svg');
    }, 100);

    element.type = 'question';
    setTimeout(() => {
      expect(element.type).to.equal('question');
      expect(img.src).to.contain('question.svg');
    }, 100);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});

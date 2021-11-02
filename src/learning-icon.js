import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class LearningIcon extends SimpleColors {
  static get tag() {
    return 'learning-icon';
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String, reflect: true },
      myIcon: { type: String },
      alt: { type: String },
      // iconHeight: { type: String, attribute: 'i-height', reflect: true },
      // iconWidth: { type: String, attribute: 'i-width', reflect: true },
    };
  }

  constructor() {
    super();
    this.myIcon = 'science';
    this.alt = 'Science Icon';
    // this.iHeight = 'inherit';
    // this.iWidth = 'inherit';
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          background-color: transparent;
          height: var(--i-height, inherit);
          width: var(--i-width, inherit);
        }

        img {
          display: inline-flex;
          height: var(--learning-header-height, 100px);
          width: var(--learning-header-width, 100px);
        }

        @media only screen and (max-width: 700px) {
          img {
            height: var(--learning-header-height, 60px);
            width: var(--learning-header-width, 60px);
            padding-top: 3px;
          }
        }
      `,
    ];
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'science') {
        this.myIcon = beaker;
        this.alt = this[propName];
      } else if (propName === 'type' && this[propName] === 'idea') {
        this.myIcon = lightbulb;
        this.alt = this[propName];
      } else if (propName === 'type' && this[propName] === 'question') {
        this.myIcon = question;
        this.alt = this[propName];
      }
    });
  }

  render() {
    return html`
      <div>
        <img part="icon" class="icon" src="${this.myIcon}" alt="${this.alt}" />
      </div>
    `;
  }
}
window.customElements.define(LearningIcon.tag, LearningIcon);

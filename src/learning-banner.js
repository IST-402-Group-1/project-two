import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';
import './learning-icon.js';

export class LearningBanner extends SimpleColors {
  static get tag() {
    return 'learning-banner';
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String },
    };
  }

  constructor() {
    super();
    this.accentColor = 'blue';
    this.type = null;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'idea') {
        this.accentColor = 'orange';
        this.type = 'idea';
      } else if (propName === 'type' && this[propName] === 'question') {
        this.accentColor = 'blue';
        this.type = 'question';
      } else if (propName === 'type' && this[propName] === 'science') {
        this.accentColor = 'green';
        this.type = 'science';
      }
    });
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: flex;
        }

        :host([type='idea']) {
          background-color: var(--simple-colors-default-theme-accent-6);
        }

        :host([type='science']) {
          background-color: var(--simple-colors-default-theme-accent-7);
        }

        :host([type='question']) {
          background-color: var(--simple-colors-default-theme-accent-8);
        }

        .banner {
          display: flex;
          width: 700px;
        }

        .iconArea {
          width: 15%;
        }

        .headerArea {
          width: 85%;
          padding-left: 1%;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="iconArea">
        <learning-icon type="${this.type}"></learning-icon>
      </div>
      <div class="headerArea">
        <slot name="header"></slot>
        <slot name="subheader"></slot>
      </div>
    `;
  }
}
window.customElements.define(LearningBanner.tag, LearningBanner);

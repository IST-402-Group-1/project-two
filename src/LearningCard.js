// dependencies / things imported
import { LitElement, html, css } from 'lit';
import './learning-body.js';
import './learning-banner.js';

export class LearningCard extends LitElement {
  static get tag() {
    return 'learning-card';
  }

  constructor() {
    super();
    this.type = '';
    this.header = 'Header';
    this.subheader = 'Subheader';
  }

  static get properties() {
    return {
      type: { type: String, reflect: true },
      header: { type: String, reflect: true },
      subheader: { type: String, reflect: true },
    };
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        display: block;
        width: 600px;
      }

      .header {
        color: white;
        font-weight: 100;
        font-size: 30px;
        padding-top: 19px;
        margin: 0px;
        text-transform: uppercase;
      }

      .subheader {
        color: white;
        font-weight: 500;
        font-size: 25px;
        margin: 0px;
        text-transform: uppercase;
      }

      learning-body {
        border: 1px solid black;
        border-top: transparent;
        margin: 0px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 20%;
        padding-right: 10%;
      }

      @media only screen and (max-width: 700px) {
        learning-banner {
          width: 400px;
        }

        .header {
          font-size: 25px;
          padding-top: 8px;
        }

        .subheader {
          font-size: 20px;
        }

        learning-body {
          padding-left: 10px;
          padding-right: 10px;
          width: 377px;
          font-size: 14px;
        }
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <learning-scaffold>
        <learning-banner slot="banner" type=${this.type}>
          <h2 class="header" slot="header">${this.header}</h2>
          <h3 class="subheader" slot="subheader">${this.subheader}</h3>
        </learning-banner>
        <learning-body slot="body">
          <slot></slot>
        </learning-body>
      </learning-scaffold>
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return {
      canScale: false,
      canPosition: false,
      canEditSource: true,
      contentEditable: true,
      gizmo: {
        title: 'Learning Card',
        description: 'Editable card to display course topics and information',
        icon: 'credit-card',
        color: 'blue',
        groups: ['Content', 'Presentation', 'Education'],
      },
      settings: {
        configure: [
          {
            property: 'type',
            title: 'Type',
            description: 'Identifies the card',
            inputMethod: 'select',
            options: {
              science: 'science',
              idea: 'idea',
              question: 'question',
            },
          },
        ],
        advanced: [],
      },
      demoSchema: [
        {
          tag: LearningCard.tag,
          properties: {
            type: 'science',
          },
          content:
            "<p slot='header'>This tag renders in the header</p><ul><li>This renders</li><li>Below the tag</li></ul>",
        },
      ],
    };
  }
}

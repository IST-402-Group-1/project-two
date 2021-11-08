import { LitElement, html, css } from 'lit';

export class LearningBody extends LitElement {
  static get tag() {
    return 'learning-body';
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          height: auto;
          min-height: 50px;
          font-size: 12pt;
          line-height: 15pt;
        }
      `,
    ];
  }

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}
window.customElements.define(LearningBody.tag, LearningBody);

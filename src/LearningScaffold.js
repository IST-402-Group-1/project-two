import { LitElement, html, css } from 'lit';

export class LearningScaffold extends LitElement {
  static get tag() {
    return 'learning-scaffold';
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          background-color: transparent;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="banner">
        <slot name="banner"></slot>
      </div>
      <div class="body">
        <slot name="body"></slot>
      </div>
    `;
  }
}

window.customElements.define(LearningScaffold.tag, LearningScaffold);

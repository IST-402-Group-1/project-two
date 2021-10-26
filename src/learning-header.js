import { html, css } from 'lit';
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";

export class LearningHeader extends SimpleColors {
    static get tag() {
        return 'learning-header';
    }

    static get properties() {
        return {
            ...super.properties,
        };
    }

    constructor () {
        super();
    }
    
    static get styles() {
        return [...super.styles,
            css`
            :host {
                display: block;
                background-color: transparent;
                border: 2px solid green;
            }
            `
        ];
    }
    render() {
        return html`
        <div>Header Stuff
            <slot></slot>
        <div>
        `;
    }
}
window.customElements.define(LearningHeader.tag, LearningHeader);
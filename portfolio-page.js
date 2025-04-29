/**
 * Copyright 2025 aarya0804
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";

/**
 * portfolio-page
 * Display a single portfolio page with content
 * 
 * @element portfolio-page
 */

export class PortfolioPage extends LitElement {
    static get tag() {
        return "portfolio-page";
    }

    constructor() {
        super();
        this.title = "Portfolio Page";
        this.pageNum = 0;
    }

    static get properties() {
        return {
            title: { type: String },
            pageNum: { type: Number }
        };
    }

    static get styles() {
        return css`
        :host {
            display: block;
            padding: 24px;
            margin: 16px;
            border-radius: 10px;
            background-color: var(--ddd-theme-default-beige);
            border: 1px solid var(--ddd-theme-default-coalGrey);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
            font-family: var(--ddd-font-body, Arial, sans-serif);
        }

        h2 {
            font-size: 28px;
            margin: 0 0 8px 0;
            color: var(--ddd-theme-default-coalyGray);
        }

        .content {
            font-size: 16px;
            color: var(--ddd-theme-default-charcoal);
        }
        `;
    }

    render() {
        return html``

    }

}
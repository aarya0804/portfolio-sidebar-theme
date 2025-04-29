/**
 * Copyright 2025 aarya0804
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import "./portfolio-menu-item.js";

/**
 * portfolio-menu
 * Displays a sidebar menu for navigating portfolio pages
 * 
 * @element portfolio-menu
 */

export class PortfolioMenu extends LitElement {
    static get tag() {
        return "portfolio-menu";
    }

    constructor() {
        super();
        this.pages = [];
    }

    static get properties() {
        return {
            pages: { type: Array }
        };
    }

    static get styles() {
        return css`
        :host {
            display: block;
            width: 250px;
            padding: 16px;
            background-color: var(--ddd--primary-18);
            color: white;
            border-right: 2px solid var(--ddd-theme-accent);
            font-family: var(--ddd-font-navigation, Arial, sans-serif);
        }
        `;
    }

    render() {
        return html`
        <div class="menu">
            ${this.pages.map((page, index) => html`
                <portfolio-menu-item 
                    title="${page.title}" 
                    @menu-item-clicked="${(e) => this._onItemClicked(e, index)}">
                </portfolio-menu-item>
            `)}
        </div>
        `;
    }

    _onItemClicked(e, index) {
        this.dispatchEvent(new CustomEvent('menu-item-clicked', {
            bubbles: true,
            composed: true,
            detail: { pageIndex: index }
        }));
    }

}

globalThis.customElements.define(PortfolioMenu.tag, PortfolioMenu);
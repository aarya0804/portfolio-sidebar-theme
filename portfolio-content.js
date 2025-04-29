/**
 * Copyright 2025 aarya0804
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import "./portfolio-page.js";

/**
 * `portfolio-content`
 * Shows the currently selected portfolio page
 *
 * @element portfolio-content
 */
export class PortfolioContent extends LitElement {
  static get tag() {
    return "portfolio-content";
  }

  constructor() {
    super();
    this.pages = [];
    this.selectedPage = 0; // Default to first page
  }

  static get properties() {
    return {
      pages: { type: Array },
      selectedPage: { type: Number }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
        background-color: var(--ddd-theme-default-beige);
        font-family: var(--ddd-font-body, Arial, sans-serif);
        min-height: 300px; /* Ensure content area has some height */
      }

      .content {
        border-left: 3px solid var(--ddd-theme-accent);
        padding: 16px;
        background-color: var(--ddd-theme-default-beige);
      }
    `;
  }

  render() {
    let content = html``;
    if (this.pages && this.pages.length > 0 && this.selectedPage < this.pages.length) {
      const page = this.pages[this.selectedPage];
      content = html`
        <portfolio-page
          title="${page.title}"
          pagenumber="${this.selectedPage + 1}">
          ${currentPage.content}
        </portfolio-page>
      `;
    }
    else
    {
        content = html`<p>No page was selected</p>`;
    }

    return html`
    <div class="content">
        ${content}
    </div>
    `;
  }
}
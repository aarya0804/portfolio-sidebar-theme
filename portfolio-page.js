/**
 * Copyright 2025 aarya0804
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import "./ddd-card.js";
import "./ddd-card-list.js";

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
    this.pagenumber = 0;
  }

  static get properties() {
    return {
      title: { type: String },
      pagenumber: { type: Number },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding-top: 100px;
        padding-bottom: 24px;
        padding-left: 24px;
        margin-bottom: 16px;
        margin-left: 250px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
        font-family: var(--ddd-font-body, Arial, sans-serif);
        border-top: 4px solid var(--ddd-theme-accent);
      }

      h2 {
        font-size: 28px;
        margin: 0 0 8px 0;
        color: var(--ddd-theme-default-potential75);
        font-weight: bold;
      }

      .content {
        font-size: 16px;
        color: var(--ddd-theme-default-potential75);
      }

      .image-container {
        display: flex;
        align-items: center;
        gap: 24px;
        flex-wrap: wrap;
      }

      .profile-pic {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid var(--ddd-theme-accent);
      }

      .about-text {
        max-width: 500px;
        font-size: 16px;
        color: var(--ddd-theme-default-primary);
      }
      .about-me {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    `;
  }

  render() {
    return html`
      <div>
        <h2>${this.title}</h2>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(PortfolioPage.tag, PortfolioPage);

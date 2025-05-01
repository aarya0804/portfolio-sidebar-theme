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
    this.pages = ["About me", "Projects", "Skills", "Experience", "Contact Me"];
  }

  static get properties() {
    return {
      pages: { type: Array },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        position: fixed;
        width: 250px;
        padding: 16px;
        height: 100%;
        /* background-color: var(--ddd-theme-default-beaverBlue); */
        color: var(--ddd-theme-default-white);
        border-right: 2px solid var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation, Arial, sans-serif);
        background-image: url("./assets/wave-haikei1.jpeg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      .menu a {
        color: var(--ddd-theme-default-white);
        text-decoration: none;
        font-weight: bold;
        font-size: 22px;
        padding: 14px 16px;
        border-radius: 6px;
        margin-bottom: 12px;
        transition: background-color 0.3s ease;
        display: flex;
        text-align: center;
        flex-direction: column;
      }

      .menu a:hover {
        background-color: var(--ddd-theme-default-coalyGray);
        color: var(--ddd-theme-default-white);
      }
    `;
  }

  render() {
    return html`
      <div class="menu">
        ${this.pages.map(
          (page, index) =>
            html` <a title="${page}" href="#page${index}">${page}</a> `
        )}
      </div>
    `;
  }
}

globalThis.customElements.define(PortfolioMenu.tag, PortfolioMenu);

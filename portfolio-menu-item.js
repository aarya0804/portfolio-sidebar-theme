/**
 * Copyright 2025 aarya0804
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";

/**
 * 'portfolio-menu-item'
 * Displays a clickable menu item in the portfolio sidebar
 *
 * @element portfolio-menu-item
 */

export class PortfolioMenuItem extends LitElement {
  static get tag() {
    return "portfolio-menu-item";
  }

  constructor() {
    super();
    this.title = "Menu Item";
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        margin: 8px 0;
        font-family: var(--ddd-font-navigation, Arial, sans-serif);
      }

      button {
        width: 100%;
        padding: 12px;
        background-color: var(--ddd-theme-primary-18); 
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        text-align: left;
        transition: background-color 0.3s ease, color 0.3s ease,
          border 0.3s ease;
      }

      button:hover,
      button:focus {
        background-color: var(--ddd-theme-primary-28); 
        color: var(--ddd-theme-default-white);
        outline: none;
        border: 2px solid var(--ddd-theme-accent); 
      }
    `;
  }

  render() {
    return html`
      <div>
        <button @click="${this._handleClick}" part="button">
          ${this.title}
        </button>
      </div>
    `;
  }

  _handleClick() {
    // Dispatch a custom event when the menu item is clicked
    this.dispatchEvent(
      new CustomEvent("menu-item-clicked", {
        detail: { title: this.title },
        bubbles: true,
        composed: true,
      })
    );
  }
}

globalThis.customElements.define(PortfolioMenuItem.tag, PortfolioMenuItem);

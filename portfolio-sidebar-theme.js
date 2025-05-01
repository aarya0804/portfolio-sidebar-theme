/**
 * Copyright 2025 aarya0804
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./portfolio-menu.js";
import "@haxtheweb/scroll-button/scroll-button.js";

/**
 * `portfolio-sidebar-theme`
 *
 * @demo index.html
 * @element portfolio-sidebar-theme
 */
export class PortfolioSidebarTheme extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "portfolio-sidebar-theme";
  }

  constructor() {
    super();
    this.title = "Portfolio";
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/portfolio-sidebar-theme.ar.json", import.meta.url)
          .href + "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }
        portfolio-menu {
          width: 250px;
          border-right: 2px solid var(--ddd-theme-accent);
        }
        portfolio-content {
          flex-grow: 1;
          padding: 24px;
        }
        ::slotted(portfolio-page) {
          margin-left: 275px; /* Space for the sidebar */
        }

        h3 span {
          font-size: var(
            --portfolio-sidebar-theme-label-font-size,
            var(--ddd-font-size-s)
          );
        }
        scroll-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html`
      <portfolio-menu> </portfolio-menu>

      <slot></slot>
      <portfolio-content
        .pages="${this.pages}"
        .selectedPage="${this.selectedPage}"
      >
      </portfolio-content>
      <scroll-button></scroll-button>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(
  PortfolioSidebarTheme.tag,
  PortfolioSidebarTheme
);

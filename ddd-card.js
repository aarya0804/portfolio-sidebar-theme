/**
 * Copyright 2025 aarya0804
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card`
 *
 * @demo index.html
 * @element ddd-card
 */
export class DddCard extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.title = "";

    this.image = "";
    this.line = "";
    this.link = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      image: { type: String },
      link: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;
          width: 360px;
          margin: 0 24px 40px 0;
          color: var(--ddd-theme-text-default);
          background-color: var(--ddd-theme-default-white);
          border-radius: var(--ddd-radius-md);
          box-shadow: var(--ddd-boxShadow-sm);
          overflow: hidden;
          max-width: 400px;
          min-width: 360px;
          min-height: 400px;
        }

        .wrapper {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: var(--ddd-spacing-4);
          height: 100%;
        }

        p {
          color: var(--ddd-theme-default-potentialMidnight);
          font-size: var(--ddd-font-size-s);
          margin: 0;
          max-height: 200px;
        }

        h3 span {
          font-size: var(
            --ddd-card-list-label-font-size,
            var(--ddd-font-size-s)
          );
        }

        h3 {
          color: var(--ddd-theme-default-potentialMidnight);
          font-size: var(--ddd-font-size-m);
          font-weight: bold;
          margin: var(--ddd-spacing-2) 0;
          max-height: 78px;
          margin: 0;
          display: flex;
          align-items: center;
        }

        .img {
          display: block;
          width: 100%;
          height: 180px;
          object-fit: contain;
          border-bottom: 3px solid var(--ddd-theme-default-nittanyNavy);
          margin: 0;
          padding: 0;
        }

        .line {
          height: 10px;
          background-color: var(--ddd-theme-default-nittanyNavy);
          margin: 0;
          padding: 0;
          margin-left: -var(--ddd-spacing-4);
          margin-right: -var(--ddd-spacing-4);
        }

        a,
        a:link,
        a:visited {
          margin-top: 16px;
          display: inline-block;
          padding: 10px 16px;
          background-color: var(--ddd-theme-default-beaverBlue);
          color: white;
          font-size: 14px;
          font-weight: bold;
          border-radius: 6px;
          text-align: center;
          text-decoration: none;
          width: 88%;
        }

        a:hover,
        a:active {
          background-color: var(--ddd-theme-default-nittanyNavy);
        }

        .project-link:empty {
          display: none;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    let button = "";

    if (this.link.length > 0) {
      button = html`
        <a href="${this.link}" class="project-link" target="_blank">
          View Project</a
        >
      `;
    }

    return html`
      <img class="img" src="${this.image}" alt="${this.title}" />
      <div class="line"></div>
      <div class="wrapper">
        <h3>${this.title}</h3>
        <slot></slot>
        ${button}
      </div>
    `;
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);

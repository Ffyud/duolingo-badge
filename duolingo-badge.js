import {html, css, LitElement} from 'lit';

export class DuolingoBadge extends LitElement {
  static styles = css`p { color: blue }`;

  static properties = {
    name: {type: String},
  };

  constructor() {
    super();
    this.name = 'Duolingo';
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
customElements.define('duolingo-badge', DuolingoBadge);
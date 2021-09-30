import { LitElement, html} from 'lit-element';

export class DuolingoBadge extends LitElement {
  render() {
    return html`
      <div>Vet hoge score</div>
    `;
  }
}

customElements.define('duolingo-badge', DuolingoBadge);
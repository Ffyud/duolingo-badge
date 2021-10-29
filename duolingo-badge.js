import {html, css, LitElement} from 'lit';

export class DuolingoBadge extends LitElement {

  static properties = {
    user: { attribute: 'username' },
    score: {type: String}
  };

  constructor() {
    url = "https://www.duolingo.com/users/" + this.user + "";
    fetch(url).then(res => res.json())
      .then(out => {
        var score = out;
        console.log(score)
      }
    );

    super();
    this.score = 'Duolingo';
  }

  render() {
    return html`<div>${this.score}!</div>`;
  }
}

DuolingoBadge.styles = css`
    div {
      background: #74c200;
      color: #FFF;
      border-radius: 8px;
      padding: 5px;
    }
  `;
customElements.define('duolingo-badge', DuolingoBadge);
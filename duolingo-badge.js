import {html, css, LitElement} from 'lit';

export class DuolingoBadge extends LitElement {
  static styles = css`div { color: blue }`;

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
customElements.define('duolingo-badge', DuolingoBadge);
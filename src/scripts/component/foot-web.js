class FooterWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <footer>
            <p>Copyright &copy; 2022 - Restaurant Finder</p>
          </footer>
           `;
  }
}
customElements.define('foot-web', FooterWeb);

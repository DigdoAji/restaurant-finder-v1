class FooterWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <footer>
            <p>Copyright &copy; 2022 - Restaurant Finder. All data obtained from <a href="https://restaurant-api.dicoding.dev/" target="_blank" rel="noreferrer">Dicoding API</a></p>
          </footer>
           `;
  }
}
customElements.define('foot-web', FooterWeb);

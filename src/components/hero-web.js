class HeroWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
        <div class="hero-text">
          <h1>Restaurant Finder</h1>
          <p>Find Your Best or Favorites Restaurant Nearby</p>
        </div>
        </div>
           `;
  }
}
customElements.define('hero-web', HeroWeb);

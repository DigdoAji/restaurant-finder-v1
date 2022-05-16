class HeroWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
          <picture>
            <source media="(min-width: 650px)" srcset="../images/hero-image-large.jpg">
            <img
                width="100%" height="360px" 
                src="../images/hero-image-small.jpg" 
                alt="hero website"
            />
          </picture>
        <div class="hero-text">
          <h1>Restaurant Finder</h1>
          <p>Find Your Best or Favorites Restaurant Nearby</p>
        </div>
        </div>
           `;
  }
}
customElements.define('hero-web', HeroWeb);

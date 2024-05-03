class HeroWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
          <picture>
            <source media="(max-width: 600px)" srcset="../images/hero/hero-image-small.jpg" type="image/jpeg">
            <source media="(max-width: 1200px)" srcset="../images/hero/hero-image-medium.jpg" type="image/jpeg">
            <img
              src="../images/hero/hero-image-large.jpg" 
              alt="Jumbotron Food Poster"
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

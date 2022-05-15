class NavWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="nav">
    <ul class="nav-logo-pos">
      <li>
        <img
          src="../icons/logo-brand.png"
          class="logo-img"
          alt="logo website"
          width="35px"
          height="35px"
        />
      </li>
      <li><h1 class="nav-logo">Restaurant Finder</h1></li>
    </ul>
    <button class="menuHamburger" tabindex="0" id="hamburgerButton" aria-label="navigation">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    <ul class="nav-bar" id="navigationDrawer">
      <li class="nav-item">
        <a href="/">Home</a>
      </li>
      <li class="nav-item">
        <a href="#/favorites-page">Favorites</a>
      </li>
      <li class="nav-item">
        <a href="https://www.linkedin.com/in/digdoajiasrowi/">About Us</a>
      </li>
    </ul>
  </nav>
    `;
  }
}
customElements.define('nav-web', NavWeb);

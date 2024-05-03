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
          src="../images/logo-brand.png"
          class="logo-img"
          alt="Icon Restaurant Finder"
        />
      </li>
      <li><h1 class="nav-logo">Restaurant Finder</h1></li>
    </ul>
    <button class="menuHamburger" id="hamburgerButton">
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
        <a href="https://www.linkedin.com/in/digdoajiasrowi/" target="_blank" rel="noreferrer">About Us</a>
      </li>
    </ul>
  </nav>
    `;
  }
}
customElements.define('nav-web', NavWeb);

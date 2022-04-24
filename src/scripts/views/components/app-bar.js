class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="header__inner">
        <h1 class="header__title"><span class="gold-text">Pramu</span>saji</h1>
        <div class="header__menu">
        <button id="menu" class="hamburger" aria-label="hamburger button">☰</button>
        </div>
        <nav class="nav" id="navigationDrawer">
            <ul class="nav__list">
                <li class="nav__item"><a href="#/">Home</a></li>
                <li class="nav__item"><a href="#/favorite">Favorite</a></li>
                <li class="nav__item"><a href="https://www.linkedin.com/in/miftahulfr/">About Us</a></li>
            </ul>
        </nav>
    </div>
    `;
  }
}

customElements.define('app-bar', AppBar);

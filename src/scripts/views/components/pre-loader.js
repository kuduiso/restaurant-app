class Preloader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="preloader">
        <div class="line-loader"></div>
        <div class="line-loader"></div>
    </div>`;
  }
}

customElements.define('pre-loader', Preloader);

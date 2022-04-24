const DetailMenuInitiator = {
  init(data, elementMenu) {
    this._data = data.restaurant;
    this._elementMenu = elementMenu;
    this._elementMenu.restaurant = this._data;
    this.render();
  },

  render() {
    document.querySelector('pre-loader').remove();
  },
};

export default DetailMenuInitiator;

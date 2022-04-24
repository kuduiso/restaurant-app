import RestaurantFavoriteIdb from '../data/favoriterestaurant-idb';

const DetailRestaurantInitiator = {
  init(data, elementRestaurant) {
    this._data = data.restaurant;
    this._elementRestaurant = elementRestaurant;
    this._elementRestaurant.restaurant = this._data;
    this.renderFavoriteIdb();
  },

  async renderFavoriteIdb() {
    const { id } = this._data;
    if (await this._isRestaurantExist(id)) {
      this._removeFavorite();
    } else {
      this._addFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await RestaurantFavoriteIdb.getRestaurant(id);
    return !!restaurant;
  },

  _addFavorite() {
    const btnFavorite = document.querySelector('#btn_favorite');
    btnFavorite.innerHTML = 'favorite_border';
    btnFavorite.classList.remove('active');
    btnFavorite.addEventListener('click', async () => {
      await RestaurantFavoriteIdb.putRestaurant(this._data);
      this.renderFavoriteIdb();
    });
  },

  _removeFavorite() {
    const btnFavorite = document.querySelector('#btn_favorite');
    btnFavorite.innerHTML = 'favorite';
    btnFavorite.classList.add('active');
    btnFavorite.addEventListener('click', async () => {
      await RestaurantFavoriteIdb.deleteRestaurant(this._data.id);
      this.renderFavoriteIdb();
    });
  },
};

export default DetailRestaurantInitiator;

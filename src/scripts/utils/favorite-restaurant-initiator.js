const FavoriteRestaurantInitiator = {
  init(data, elementFavorite) {
    this._data = data;
    this._elementFavorite = elementFavorite;
    this._elementFavorite.favoriteRestaurant = this._data;
  },
};

export default FavoriteRestaurantInitiator;

const HomeRestaurantInitiator = {
  init(data, elementPost) {
    this._data = data;
    this._elementPostRestaurant = elementPost;
    this.render();
  },

  render() {
    const restaurants = this._data;
    restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('item-restaurant');
      restaurantItemElement.restaurant = restaurant;
      this._elementPostRestaurant.appendChild(restaurantItemElement);
    });
    document.querySelector('pre-loader').remove();
  },
};

export default HomeRestaurantInitiator;

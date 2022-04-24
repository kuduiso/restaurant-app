class DetailRestaurantMenu extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const restaurant = this._restaurant;
    this.innerHTML = `
        <div class="box_menu">
            <div class="card_menu">
                <h4><span class="material-icons">lunch_dining</span> Makanan</h4>
                <ul>
                    ${this.getFoods(restaurant.menus.foods)}
                </ul>
            </div>
            <div class="card_menu">
                <h4><span class="material-icons">local_cafe</span> Minuman</h4>
                <ul>
                    ${this.getDrinks(restaurant.menus.drinks)}
                </ul>
            </div>
        <div>
    `;
  }

  getFoods(foods) {
    let foodItem = '';
    foods.forEach((food) => {
      foodItem += `<li>${food.name}</li>`;
    });
    return foodItem;
  }

  getDrinks(drinks) {
    let drinkItem = '';
    drinks.forEach((drink) => {
      drinkItem += `<li>${drink.name}</li>`;
    });
    return drinkItem;
  }
}

customElements.define('detail-menu', DetailRestaurantMenu);

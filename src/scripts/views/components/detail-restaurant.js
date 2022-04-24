import CONFIG from '../../globals/config';

class DetailRestaurant extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  set addFavorite(favoriteEvent) {
    this.addFavoriteEvent = favoriteEvent;
    this.render();
  }

  render() {
    const restaurant = this._restaurant;
    this.innerHTML = `
        <div class="detail_restaurant_item">
          <figure>
            <img src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" loading="lazy" alt="gambar-coba"></img>
            <figcaption>
              <button  class="button_favorite material-icons" id="btn_favorite" aria-label="Like this restaurant">favorite_border</button>
            </figcaption>
          </figure>
          <div class="detail_description">
            <h2>${restaurant.name}</h2>
            <div class="restaurant__rating">${this.addStarRating(restaurant.rating)} ${restaurant.rating}</div>
            <p class="restaurant__city"><span class="material-icons">location_city</span>${restaurant.address}, ${restaurant.city}</p>
            <h3>Kategori</h3>
            <ul>${this.getCategories(restaurant.categories)}</ul>
            <p class="item__description">${restaurant.description}</p>
          </div>
        </div>
    `;
    this.querySelector('button').addEventListener('click', this.addFavoriteEvent);
  }

  getCategories(categories) {
    let categoryAll = '';
    categories.forEach((category) => {
      categoryAll += `<li class="detail__category">${category.name}</li>`;
    });
    return categoryAll;
  }

  addStarRating(rating) {
    let ratingStar = '';
    for (let i = 0; i < parseFloat(rating); i++) {
      if ((parseFloat(rating)) > i && i === (parseInt(rating))) {
        ratingStar += '<span class="material-icons">star_half</span>';
      } else {
        ratingStar += '<span class="material-icons">star</span>';
      }
    }

    if ((Math.ceil(parseFloat(rating))) < 5) {
      for (let i = 0; i < 5 - Math.ceil(parseFloat(rating)); i++) {
        ratingStar += '<span class="material-icons">star_outline</span>';
      }
    }
    return ratingStar;
  }
}

customElements.define('detail-restaurant', DetailRestaurant);

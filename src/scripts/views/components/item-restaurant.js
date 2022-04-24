import CONFIG from '../../globals/config';

class ItemRestaurant extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const restaurant = this._restaurant;
    this.innerHTML = `
        <article class="item__restaurant">
            <figure class="wrap__thumbnail__restaurant">
                <img class="thumbnail__restaurant" src="${`${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}`}" loading="lazy" alt="Image ${restaurant.name}">
                <figcaption>${restaurant.name}</figcaption>
            </figure>
            <div class="item__info">
                <div class="restaurant__rating">
                    ${this.addStarRating(restaurant.rating)}
                    ${restaurant.rating}
                </div>
                <div class="restaurant__city">
                    <span class="material-icons">location_city</span>${restaurant.city}
                </div>
            </div>
            <p class="item__description">
                ${restaurant.description}
            </p>
            <a class="read__more" href="/#/detail/${restaurant.id}">Read More</a>
        </article>
        `;
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

customElements.define('item-restaurant', ItemRestaurant);

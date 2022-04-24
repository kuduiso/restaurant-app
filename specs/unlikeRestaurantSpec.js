import RestaurantFavoriteIdb from '../src/scripts/data/favoriterestaurant-idb';
import DetailRestaurantInitiator from '../src/scripts/utils/detail-restaurant-initiator';

const addFavoriteButton = () => {
  document.body.innerHTML = '<button  class="button_favorite material-icons" id="btn_favorite" aria-label="Like this restaurant">favorite_border</button>';
};

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    addFavoriteButton();
    await RestaurantFavoriteIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await RestaurantFavoriteIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await DetailRestaurantInitiator.init({
      restaurant: {
        id: 1,
      },
    },
    document.querySelector('button'));

    await RestaurantFavoriteIdb.putRestaurant({ id: 1 });
    expect(document.querySelector('#btn_favorite').classList.contains('active')).toBeTruthy();
    await RestaurantFavoriteIdb.deleteRestaurant(1);
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await DetailRestaurantInitiator.init({
      restaurant: {
        id: 1,
      },
    },
    document.querySelector('button'));

    await RestaurantFavoriteIdb.putRestaurant({ id: 1 });
    expect(document.querySelector('#btn_favorite').innerHTML === 'favorite_border').toBeFalsy();
    await RestaurantFavoriteIdb.deleteRestaurant(1);
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await DetailRestaurantInitiator.init({
      restaurant: {
        id: 1,
      },
    },
    document.querySelector('button'));

    await RestaurantFavoriteIdb.putRestaurant({ id: 1 });
    document.querySelector('#btn_favorite').dispatchEvent(new Event('click'));

    expect(await RestaurantFavoriteIdb.getAllRestaurants()).toEqual([]);
  });
});

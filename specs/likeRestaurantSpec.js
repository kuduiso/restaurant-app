import RestaurantFavoriteIdb from '../src/scripts/data/favoriterestaurant-idb';
import DetailRestaurantInitiator from '../src/scripts/utils/detail-restaurant-initiator';

describe('Liking A Restaurant', () => {
  const addFavoriteButton = () => {
    document.body.innerHTML = '<button  class="button_favorite material-icons" id="btn_favorite" aria-label="Like this restaurant">favorite_border</button>';
  };

  beforeEach(() => {
    addFavoriteButton();
  });

  it('should show the like button when the restaurants has not been liked before', async () => {
    await DetailRestaurantInitiator.init({
      restaurant: {
        id: 1,
      },
    },
    document.querySelector('button'));
    expect(document.querySelector('#btn_favorite')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await DetailRestaurantInitiator.init({
      restaurant: {
        id: 1,
      },
    },
    document.querySelector('button'));

    expect(document.querySelector('.active')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await DetailRestaurantInitiator.init({
      restaurant: {
        id: 1,
      },
    },
    document.querySelector('button'));

    document.querySelector('#btn_favorite').addEventListener('click', () => {
      RestaurantFavoriteIdb.putRestaurant({ id: 1 });
    });
    document.querySelector('#btn_favorite').dispatchEvent(new Event('click'));
    const restaurant = await RestaurantFavoriteIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    RestaurantFavoriteIdb.deleteRestaurant(1);
  });

  it('should not add restaurant when it has no id', async () => {
    await DetailRestaurantInitiator.init({
      restaurant: { },
    },
    document.querySelector('button'));

    document.querySelector('#btn_favorite').dispatchEvent(new Event('click'));

    expect(await RestaurantFavoriteIdb.getAllRestaurants()).toEqual([]);
  });
});

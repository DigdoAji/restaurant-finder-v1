import FavoriteRestoIdb from '../src/scripts/data/favoritesresto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Favorite This Resto', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  it('should display favorite button when the resto has not been favorited before', async () => {
    await TestFactories.createFavoriteButtonInitiatorForResto({ id: 1 });

    expect(document.querySelector('[aria-label="favorite this resto"]')).toBeTruthy();
  });

  it('should not display unfavorite button when the resto has not been favorited before', async () => {
    await TestFactories.createFavoriteButtonInitiatorForResto({ id: 1 });

    expect(document.querySelector('[aria-label="unfavorite this resto"]')).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await TestFactories.createFavoriteButtonInitiatorForResto({ id: 1 });

    document.querySelector('#FavButton').dispatchEvent(new Event('click'));

    const resto = await FavoriteRestoIdb.getResto(1);
    expect(resto).toEqual({ id: 1 });
    FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a resto again when its already Favorited', async () => {
    await TestFactories.createFavoriteButtonInitiatorForResto({ id: 1 });

    await FavoriteRestoIdb.putResto({ id: 1 });
    document.querySelector('#FavButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);
    FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add the resto when it has no id', async () => {
    await TestFactories.createFavoriteButtonInitiatorForResto({});

    document.querySelector('#FavButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});

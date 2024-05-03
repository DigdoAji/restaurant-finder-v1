import FavoriteRestoIdb from '../src/scripts/data/favoritesresto-idb';
import * as TestFactories from './helpers/testFactories';

const addFavoriteButtonContainer = () => {
  document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
};

describe('Unfavorite This Resto', () => {
  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestoIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });

  it('should display unfavorite button when the resto has been Favorited', async () => {
    await TestFactories.createFavoriteButtonInitiatorForResto({ id: 1 });

    expect(document.querySelector('[aria-label="unfavorite this resto"]')).toBeTruthy();
  });

  it('should not display favorite button when the resto has been favorited', async () => {
    await TestFactories.createFavoriteButtonInitiatorForResto({ id: 1 });

    expect(document.querySelector('[aria-label="favorite this resto"]')).toBeFalsy();
  });

  it('should be able to remove favorited resto from list', async () => {
    await TestFactories.createFavoriteButtonInitiatorForResto({ id: 1 });

    document.querySelector('[aria-label="unfavorite this resto"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });

  it('should not throw error if the unfavorited resto is not in the list', async () => {
    await TestFactories.createFavoriteButtonInitiatorForResto({ id: 1 });

    await FavoriteRestoIdb.deleteResto(1);
    document.querySelector('[aria-label="unfavorite this resto"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});

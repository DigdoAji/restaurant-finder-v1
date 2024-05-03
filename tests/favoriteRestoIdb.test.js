import FavoriteRestoIdb from '../src/scripts/data/favoritesresto-idb';
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (
      await FavoriteRestoIdb.getAllResto()).forEach(async (resto) => {
      await FavoriteRestoIdb.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestoIdb);
});

import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';
import FavoriteRestoIdb from '../../src/scripts/data/favoritesresto-idb';

const createFavoriteButtonInitiatorForResto = async (resto) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    favoriteResto: FavoriteRestoIdb,
    resto,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createFavoriteButtonInitiatorForResto };

import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';

const createFavoriteButtonInitiatorForResto = async (resto) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    resto,
  });
};

export { createFavoriteButtonInitiatorForResto };

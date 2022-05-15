import FavoriteRestoIdb from '../data/favoritesresto-idb';
import { createFavoriteRestoButtonTemplate, createUnFavoriteRestoButtonTemplate } from '../views/templates/template-creator';

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, resto }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getResto(id);
    return !!resto;
  },

  _renderLike() {
    this._favoriteButtonContainer.innerHTML = createFavoriteRestoButtonTemplate();

    const FavButton = document.querySelector('#FavButton');
    FavButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._favoriteButtonContainer.innerHTML = createUnFavoriteRestoButtonTemplate();

    const FavButton = document.querySelector('#FavButton');
    FavButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;

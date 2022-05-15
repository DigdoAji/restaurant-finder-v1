import Home from '../views/pages/home-resto';
import Favorites from '../views/pages/favorites-resto';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home, // default page
  '/home-page': Home,
  '/favorites-page': Favorites,
  '/detail/:id': Detail,
};

export default routes;

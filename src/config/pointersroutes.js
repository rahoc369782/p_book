import { Favorites } from "../pages/favorites/favorites";
import { Explore } from "../pages/explore/explore";
import { Login } from "../pages/authorization/login/login";
import Profile from "../pages/profile/profile";

const pointers_routes = [
  {
    component: Favorites,
    path: "/",
    status: true,
    restricted: false,
  },
  {
    component: Explore,
    path: "/explore",
    status: false,
    restricted: false,
  },
  {
    component: Login,
    path: "/login",
    status: false,
    restricted: true,
  },
  {
    component: Profile,
    path: "/profile/:id",
    status: true,
    restricted: false,
  },
];

export { pointers_routes };

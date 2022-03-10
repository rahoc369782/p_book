import { Favorites } from "../pages/favorites/favorites";
import { Explore } from "../pages/explore/explore";
import { Login } from "../pages/authorization/login/login";
import { Registration } from "../pages/authorization/registration/registration";
import Profile from "../pages/profile/profile";
import { Bookmarks } from "../pages/bookmark/bookmark";
import { Settings } from "../pages/settings/settings"
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
    component: Bookmarks,
    path: "/saved",
    status: true,
    restricted: false,
  },
  {
    component: Settings,
    path: "/settings",
    status: true,
    restricted: false,
  },
  {
    component: Login,
    path: "/login",
    status: false,
    restricted: true,
  },
  {
    component: Registration,
    path: "/welcome",
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

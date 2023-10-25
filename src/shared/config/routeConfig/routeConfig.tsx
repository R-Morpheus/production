import {RouteProps} from "react-router-dom";
import MainPage from "pages/ui/MainPage/ui/MainPage";
import {AboutPage} from "pages/ui/AboutPage";
import {NotFoundPage} from "pages/ui/NotFoundPage";

export enum AppRoutes{
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound'
}

export const AppRoute: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: AppRoute.main,
    element: <MainPage/>
  },
  [AppRoutes.ABOUT]: {
    path: AppRoute.about,
    element: <AboutPage/>
  },
  [AppRoutes.NOT_FOUND]: {
    path: AppRoute.notFound,
    element: <NotFoundPage/>
  }
}
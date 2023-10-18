import {RouteProps} from "react-router-dom";
import MainPage from "pages/ui/MainPage/ui/MainPage";
import {AboutPage} from "pages/ui/AboutPage";

export enum AppRoutes{
  MAIN = 'main',
  ABOUT = 'about'
}

export const AppRoute: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: AppRoute.main,
    element: <MainPage/>
  },
  [AppRoutes.ABOUT]: {
    path: AppRoute.about,
    element: <AboutPage/>
  }
}
import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  //only for loader
  setTimeout(() => resolve(import('./MainPage')), 1500);
}));
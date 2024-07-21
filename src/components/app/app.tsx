import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { AppRoute } from '../../const';
import { PrivateRoute } from '../access-route/access-route';

type AppScreenProps = {
  placeCardsCount: number;
  foundedPlacesCount: number;
}

const currentStatus = 'NO_AUTH';

function App({placeCardsCount, foundedPlacesCount}: AppScreenProps): JSX.Element {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: AppRoute.Main,
          element: <MainPage placeCount={placeCardsCount} foundedPlacesCount={foundedPlacesCount} />,
          index: true
        },
        {
          path: AppRoute.Login,
          element: <LoginPage />
        },
        {
          path: AppRoute.Favorites,
          element: (
            <PrivateRoute status={currentStatus}>
              <FavoritesPage/>
            </PrivateRoute>
          )
        },
        {
          path: AppRoute.Offer,
          element: <OfferPage />
        }],
      errorElement: <NotFoundPage />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;

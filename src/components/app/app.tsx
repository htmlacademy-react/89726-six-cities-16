import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';

type AppScreenProps = {
  placeCardsCount: number;
  foundedPlacesCount: number;
}

function App({placeCardsCount, foundedPlacesCount}: AppScreenProps): JSX.Element {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: '/',
          element: <Main placeCount={placeCardsCount} foundedPlacesCount={foundedPlacesCount} />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/favorites',
          element: <Favorites />
        },
        {
          path: '/offer/:id',
          element: <Offer />
        }],
      errorElement: <NotFound />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;

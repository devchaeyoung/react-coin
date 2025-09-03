import { HomePage, CoinPage } from './pages/index';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/coin',
    element: <CoinPage />,
  },
]);

export default router;

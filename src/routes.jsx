import HomePage from './HomePage';
import Colors from './colors';
import Recipes from './recipes';

const router = createBrowserRouter([
  {
    index: true,
    element: (
      <div>
        <HomePage />
      </div>
    ),
  },
  {
    path: '/colors',
    element: (
      <Colors />
    ),
  },
  {
    path: '/recipes',
    element: (
      <Recipes />
    ),
  },
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);

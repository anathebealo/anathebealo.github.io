import HomePage from './HomePage';
import Colors from './colors';
import Recipes from './recipes';
import WikiGraph from './WikiGraph';

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
  {
    path: '/wiki',
    element: (
      <WikiGraph />
    ),
  },
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);

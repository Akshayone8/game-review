import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./app-layout/AppLayou";
import HomePage from "./pages/HomePage";
import ReviewDetails from "./pages/ReviewDetails";
import Categroy from "./pages/Categroy";

const appRoute = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/details/:id",
        element: <ReviewDetails />,
      },
      {
        path: "/category/:id",
        element: <Categroy />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="app">
      <RouterProvider router={appRoute} />
    </div>
  );
}

export default App;

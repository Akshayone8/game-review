import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./app-layout/AppLayou";
import HomePage from "./pages/HomePage";
import ReviewDetails from "./pages/ReviewDetails";
import Categroy from "./pages/Categroy";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

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

//apollo client - client connection
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql", //entrypoint
  cache: new InMemoryCache(), //what type of cache that s in memory cache
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <RouterProvider router={appRoute} />
      </div>
    </ApolloProvider>
  );
}

export default App;

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { routes } from "./routes/route-container";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        {routes.map(({ path, element }) => (
          <Route path={path} key={path} element={element} />
        ))}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

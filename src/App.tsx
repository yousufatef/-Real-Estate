import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Agents from "./pages/Agents";
import About from "./pages/About";
import Contact from "./pages/Contact";
import List from "./pages/List/List";
import SinglePage from "./pages/SinglePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/list",
          element: <List />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        {
          path: "/agents",
          element: <Agents />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        }
      ]
    }
  ]);

  return (

    <RouterProvider router={router} />
  );
}

export default App;
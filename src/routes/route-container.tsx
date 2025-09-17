import type { RouteProps } from "react-router-dom";
import Home from "../pages/Treatment";
import About from "../pages/About";
import Treatment from "../pages/Treatment";
import Weight from "../pages/Weight";
import Skin from "../pages/Skin";
import News from "../pages/News";
import Contact from "../pages/Contact";

// type RouterProps = RouteProps & {};

export const routes = [
  {
    path: "/",
    element: <Home />,
    text: "Home",
  },
  {
    path: "/about",
    element: <About />,
    text: "About",
  },
  {
    path: "/treatment",
    element: <Treatment />,
    text: "Treatment",
  },
  {
    path: "/weight",
    element: <Weight />,
    text: "Weight",
  },
  {
    path: "/skin",
    element: <Skin />,
    text: "Skin",
  },
  {
    path: "/news",
    element: <News />,
    text: "News",
  },
  {
    path: "/contact",
    element: <Contact />,
    text: "Contact",
  },
];

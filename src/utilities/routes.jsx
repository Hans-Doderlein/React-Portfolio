import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Resume } from "../pages/Resume";
import { Portfolio } from "../pages/portfolio";

export const routes = {
  home: {
    path: "/",
    element: <About />,
    label: "About Me",
  },
  contact: {
    path: "/contact",
    element: <Contact />,
    label: "Contact",
  },
  portfolio: {
    path: "/portfolio",
    element: <Portfolio />,
    label: "Portfolio",
  },
  resume: {
    path: "/resume",
    element: <Resume />,
    label: "Resume",
  },
};

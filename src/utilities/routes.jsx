import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { Portfolio } from "../pages/Portfolio/Portfolio";
import { Resume } from "../pages/Resume/Resume";

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

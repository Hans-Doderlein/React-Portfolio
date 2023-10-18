import { useReducer } from "react";
import { routes } from "../../utilities/routes";
import { NavLink } from "../NavLink/NavLink";
import "./NavBar.css";
import { useLocation } from "react-router-dom";

export function Navbar({ showLinks }) {
  const routeList = Object.keys(routes).map((route) => ({
    to: routes[route].path,
    label: routes[route].label,
  }));

  const currentPage = useLocation().pathname;

  const links = (
    <ul className="NavLinks">
      {routeList.map((route) => {
        return (
          <li className={currentPage === route.to ? " active" : null}>
            <NavLink key={route.to} {...route} />
          </li>
        );
      })}
    </ul>
  );

  return (
    <nav>
      <div className="smScreen">{showLinks ? links : null}</div>
      <div className="mdlgScreen ">{links}</div>
    </nav>
  );
}

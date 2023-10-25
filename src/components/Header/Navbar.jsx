import { routes } from "../../utilities/routes";
import { NavLink } from "../NavLink/NavLink";
import "./NavBar.css";
import { useLocation } from "react-router-dom";

export function Navbar({ showLinks, toggleShowLinks }) {
  const routeList = Object.keys(routes).map((route, index) => ({
    key: index,
    to: routes[route].path,
    label: routes[route].label,
  }));

  const currentPage = useLocation().pathname;

  function handleClick() {
    toggleShowLinks(false);
  }

  const links = (
    <ul className="NavLinks">
      {routeList.map((route) => {
        return (
          <li
            onClick={handleClick}
            key={route.key}
            className={currentPage === route.to ? " active" : null}
          >
            <NavLink key={route.key} {...route} />
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

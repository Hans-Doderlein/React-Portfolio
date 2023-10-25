import { HeaderH1 } from "./Header";
import { Navbar } from "./Navbar";
import "./MainHeader.css";
import { NavButton } from "./NavButton";
import { useReducer } from "react";

export function MainHeader() {
  const [showLinks, toggleShowLinks] = useReducer((state) => !state, false);

  return (
    <header id="main-header">
      <div className="h1Nav">
        <HeaderH1 title="Hans Doderlein" />
        <NavButton showLinks={showLinks} toggleShowLinks={toggleShowLinks} />
      </div>

      <Navbar showLinks={showLinks} toggleShowLinks={toggleShowLinks} />
    </header>
  );
}

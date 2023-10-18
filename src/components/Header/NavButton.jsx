export function NavButton({ showLinks, toggleShowLinks }) {
  return (
    <div className="smScreen links">
      <div
        className={`linkButton container ${showLinks ? "change" : ""}`}
        onClick={toggleShowLinks}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
}

import React from "react";
import { Link, useLocation } from "react-router-dom";

export function NavLink({ label, to }) {
  return <Link to={to}>{label}</Link>;
}

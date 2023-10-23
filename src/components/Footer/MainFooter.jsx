import { footerLinks } from "../../utilities/footerLinks";
import { FooterLink } from "./FooterLink";
import "./MainFooter.css";

export function MainFooter() {
  return (
    <footer className="mainFooter">
      {footerLinks.map((link) => (
        <FooterLink key={link.description} {...link} />
      ))}
    </footer>
  );
}

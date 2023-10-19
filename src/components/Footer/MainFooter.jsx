import { footerLinks } from "../../utilities/footerLinks";
import { FooterLink } from "./FooterLink";
import "./MainFooter.css";

export function MainFooter() {
  return (
    <footer>
      {footerLinks.map((link) => (
        <FooterLink {...link} />
      ))}
    </footer>
  );
}

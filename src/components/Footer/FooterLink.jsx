export function FooterLink({ icon, link, description }) {
  return (
    <a className="footerLink" target="_blank" href={link}>
      <img className="footerIcon" src={icon} alt={description} />
    </a>
  );
}

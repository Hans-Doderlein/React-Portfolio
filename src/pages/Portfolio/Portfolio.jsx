import { HeaderH2, HeaderH3 } from "../../components/Header/Header";
import { projects } from "../../utilities/projects";
import "./MainPortfolio.css";
// import { PortfolioLink } from "./PortfolioLink";

export function Portfolio() {
  return (
    <main className="portfolio">
      <HeaderH2 title="Portfolio" />
      <section className="portfolioLink">
        {projects.map(({ name, mainImg, weblink, gitlink, icon }) => (
          <div
            key={name}
            className="card"
            style={{ backgroundImage: `url(${mainImg})` }}
          >
            <div className="content">
              <a href={weblink} className="contentElement">
                <HeaderH3 title={name} />
              </a>

              <a
                className="contentElement footer"
                href={gitlink}
                target="_blank"
              >
                <img src={icon} alt="git icon" />
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

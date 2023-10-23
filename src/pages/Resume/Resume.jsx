import "./Resume.css";
import { HeaderH2, HeaderH3 } from "../../components/Header/Header";
import { frontEnd, backEnd, sourceControl } from "../../utilities/proficencies";

export function Resume() {
  return (
    <div className="resumePage">
      <div className="resumeLink">
        Dowload My Resume &nbsp;
        <a href="../Files/Resume.docx">Here</a>
      </div>

      <div className="resumeInfo">
        <div className="resume">
          <HeaderH3 title="Front End Proficiencies" />
          <ul>
            {frontEnd.map((item) => (
              <li className="proficiency">- {item}</li>
            ))}
          </ul>
        </div>
        <div className="resume">
          <HeaderH3 title="Back End Proficiencies" />
          <ul>
            {backEnd.map((item) => (
              <li className="proficiency">- {item}</li>
            ))}
          </ul>
        </div>
        <div className="resume">
          <HeaderH3 title="Source Control Proficiencies" />
          <ul>
            {sourceControl.map((item) => (
              <li className="proficiency">- {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

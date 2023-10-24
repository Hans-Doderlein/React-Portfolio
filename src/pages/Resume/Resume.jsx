import "./Resume.css";
import { HeaderH3 } from "../../components/Header/Header";
import { frontEnd, backEnd, sourceControl } from "../../utilities/proficencies";

function ResumeCard({ title, list }) {
  return (
    <div className="resume">
      <HeaderH3 title={title} />
      <ul>
        {list.map((item) => (
          <li key={item} className="proficiency">
            - {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
export function Resume() {
  return (
    <div className="resumePage">
      <div className="resumeLink">
        Dowload My Resume &nbsp;
        <a href="../Files/Resume.docx">Here</a>
      </div>

      <div className="resumeInfo">
        <ResumeCard title="Front End Proficiencies" list={frontEnd} />
        <ResumeCard title="Back End Proficiencies" list={backEnd} />
        <ResumeCard title="Source Control" list={sourceControl} />
      </div>
    </div>
  );
}

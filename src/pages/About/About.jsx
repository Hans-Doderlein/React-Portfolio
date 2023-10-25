import "./About.css";
export function About() {
  return (
    <main className="about-me" id="about-me">
      <h2>About Me</h2>

      <div className="aboutMeContent">
        <p>My name is Hans Doderlein.</p>
        <p>
          I spent my adolescent years in South Florida where I began my first
          job in the service industry. A job that I continue working after hours
          to this day.
        </p>
        <p>
          After completing high school, I attended the University of Central
          Florida, where I recieved my B.A. in Biomedical Sciences.
        </p>
        <p>
          I immediately began working in the ER department of a nearby hosiptal.
          As I began to shadow surgeons, doctors, nurses, etc., I realized that
          this profession was not for me.
        </p>
        <p>
          I do still enjoy medicine and will always cherish the knowledge and
          experiences I gained in my two years in the ER.
        </p>
        <p>
          After that I began my brief career in teaching. I worked as a teacher
          for two years teaching grades 6-12 Math, Biology, and Chemistry.
        </p>
        <p>
          It was towards the end of my last year teaching that I realized I
          wanted to go into coding.
        </p>
        <p>I began the coding bootcamp at UNC.</p>
      </div>

      <div className="profileimg">
        <img src="./images/ProfilePic.jpg" alt="Pofile Picture" />
      </div>
    </main>
  );
}

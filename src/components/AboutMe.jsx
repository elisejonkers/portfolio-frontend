import elise_1 from "../assets/foto1.jpg";
import cvFile from "../assets/CV_EliseJonkers.pdf"

function AboutMe() {
  const downloadCV = () => {
    window.open(cvFile, "_blank");
  };

  return (
    <div>
      <div className="aboutme-div bg-base-100">
        <div className="aboutme-item-1">
          <img src={elise_1} alt="photo 1" />
        </div>
        <div className="aboutme-item-2">
          <h1>About me</h1>
          <p>
            Hi! I'm Elise, a Full Stack Developer. I recently changed careers
            from finance to development, facilitated by a web development
            bootcamp by Ironhack. This decision was made to make better use of
            my qualities as detail-oriented, problem-solving thinking,
            creativity and persistance. My excitement about development grows
            every day and I can't wait to turn this into professional
            experience.
          </p>
          <br />
          <p>
            During the Ironhack bootcamp I have gained several skills to create
            dynamic and interesting web applications. Combined with my previous
            gained skills such as organization, the ability to provide and
            receive feedback, my endless hunger to grow and collaboration, I can
            be the perfect fit for your team!
          </p>
          <br />
          <p>
            My intention is to bring my diverse background and set of skills to
            the development and improvement of digital products, bringing
            creativity and efficiency together.{" "}
          </p>
          <br />
          <button className="btn btn-sm bg-info" onClick={downloadCV}>
            Download my CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

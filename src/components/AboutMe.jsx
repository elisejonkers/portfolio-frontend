import { Link } from "react-router-dom";
import elise_1 from "../assets/foto1.jpg";
import cvFile from "../assets/EliseJonkers_FullStackDeveloper_Resume.pdf"

function AboutMe() {
  const downloadCV = () => {
    window.open(cvFile, "_blank");
  };

  return (
    <div>
      <div className="aboutme-div">
        <div className="aboutme-item-1">
          <img  src={elise_1} alt="photo 1" />
          <button className="btn btn-sm bg-warning" onClick={downloadCV}>
            Download my CV
          </button>
        </div>
        {/* <div className="aboutme-item-3">
          
        </div> */}
        <div className="aboutme-item-2">
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            sodales sit amet justo quis tempor. Phasellus egestas orci sed erat
            tempus bibendum. Duis vel sollicitudin lacus, ut tristique lectus.
            Sed egestas viverra rhoncus. Suspendisse neque nisi, malesuada eu
            viverra sit amet, egestas tempor urna. Vestibulum nec augue quis
            enim mattis mattis et sagittis sem. Morbi ornare enim felis, vitae
            interdum ante viverra quis. Ut viverra, libero id vestibulum
            malesuada, sapien orci egestas lacus, vitae dapibus odio tortor vel
            elit. Nunc vitae ornare velit, eget dignissim leo. Cras maximus et
            tellus id pellentesque.{" "}
          </p>
          <br></br>
          <p>
            Maecenas quis ex porttitor, efficitur nisi quis, euismod mi. Donec
            tristique eros id nunc feugiat ultricies. Proin pellentesque
            venenatis commodo. Sed dictum pretium metus. Proin id sapien
            scelerisque, condimentum tortor ac, tincidunt augue. Phasellus ac
            diam odio. Cras elementum ipsum felis, sit amet eleifend dolor
            blandit vel. Aliquam mollis, risus ac luctus porta, quam risus
            consequat tellus, eget faucibus felis nulla consequat magna.
            Maecenas a semper urna. Sed et sem sapien. Nam ornare pharetra erat,
            ut tincidunt justo imperdiet vitae. Cras pretium, dui eget viverra
            viverra, magna nunc ultricies turpis, placerat aliquet felis quam
            vitae magna. Duis accumsan elit vel maximus venenatis
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

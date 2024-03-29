import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import i_do_planner from "../assets/I-do-planner.png";
import happen_hub from "../assets/HappenHub.png";
import clean_up from "../assets/CleanUpGame.png";

function ProjectDetails() {
  const [project, setProject] = useState({});
  const [technologies, setTechnologies] = useState([]);
  const { projectId } = useParams();

  const loadDetails = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/projects/${projectId}`)
      .then((response) => {
        setProject(response.data);
        setTechnologies(response.data.technologies);
      })
      .catch((error) => {
        console.log("Error getting project details", error);
      });
  };

  const redirectToWindow = (project) => {
    window.open(project.URL, "_blank");
  };

  const getImage = (id) => {
    if (id === 1) {
      return { i_do_planner };
    } else if (id === 2) {
      return happen_hub;
    } else if (id === 3) {
      return clean_up;
    }
    console.log("imageeeeee");
  };

  useEffect(() => {
    loadDetails();
  }, [projectId]);

  return (
    <div className="projectdetails">
      <div className="projectdetails-card">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <div className="used-technologies">
          {technologies.map((technology) => {
            return <span className="badge">{technology}</span>;
          })}
        </div>
        <button onClick={() => redirectToWindow(project)}>
          Check the app here!
        </button>
      </div>
    </div>
  );
}

export default ProjectDetails;

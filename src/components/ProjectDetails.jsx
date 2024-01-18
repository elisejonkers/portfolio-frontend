import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import image from "../assets/I-do-planner.png"
import elise_1 from "../assets/foto1.jpg";

function ProjectDetails() {
  const [project, setProject] = useState({});
  const [technologies, setTechnologies] = useState([])
  const { projectId } = useParams();

  const loadDetails = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/projects/${projectId}`)
      .then((response) => {
        setProject(response.data);
        setTechnologies(response.data.technologies)
      })
      .catch((error) => {
        console.log("Error getting project details", error);
      });
  }; 

  const redirectToWindow = (project) => {
    window.open(project.URL, '_blank')
  }

  useEffect(() => {
    loadDetails();
  }, [projectId]);

  return (
    <div className="projectdetails">
      <div className="projectdetails-card">
        <img src={`../assets/${project.image}`} alt="image project" />
      <div className="projectdetails-card-body">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <div className="used-technologies">
          {technologies.map((technology) => {
            return <span className="badge">{technology}</span>
          })}
        </div>
        <button onClick={() => redirectToWindow(project)}>Check the app here!</button>
      </div>
      </div>
    </div>
  );
}

export default ProjectDetails;

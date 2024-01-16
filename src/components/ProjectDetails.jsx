import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
useParams;

function ProjectDetails() {
  const [project, setProject] = useState({});
  const { projectId } = useParams();

  const loadDetails = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/projects/${projectId}`)
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.log("Error getting project details", error);
      });
  };

  useEffect(() => {
    loadDetails();
  }, [projectId]);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
    // <div>
    //     <a href={project.URL}>
    //     <h2>{project.name}</h2>
    //     </a>
    //     <p>{project.description}</p>

    //         {/* {project.technologies.map((technology) => {
    //             return <p>{technology}</p>
    //         })} */}
    // </div>
  );
}

export default ProjectDetails;

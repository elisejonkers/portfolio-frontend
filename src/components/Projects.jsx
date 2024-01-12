import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Projects () {
const [projects, setProjects] = useState([])

const loadProjects = () => {
  axios
    .get(`${import.meta.env.VITE_API_URL}/projects`)
    .then((response) => {
      console.log("this is projects", response.data);
      setProjects(response.data);
    })
    .catch((error) => {
      console.log("This is error", error);
    });
};

useEffect(() => {
    loadProjects()
}, [])

    return (
        <div>
            <h1>Projects</h1>
        <div className="project-container">
        
        {projects.map((project) => {
            return (
                <div key={project.id} className="card">
                    <h5 className="card-title">{project.name}</h5>
                    <Link to={`/projectdetails/${project.id}`}>
                    <a >More Details</a>
                    </Link>
                </div>
            )
        })}
        </div>
        </div>
    )
}

export default Projects
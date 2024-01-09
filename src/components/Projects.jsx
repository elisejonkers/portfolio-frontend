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
        {projects.map((project) => {
            return (
                <div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <Link to={`/projectdetails/${project.id}`}>
                    <button className="btn btn-dark">More Details</button>
                    </Link>
                </div>
            )
        })}
        </div>
    )
}

export default Projects
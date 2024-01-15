import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Projects () {
const [projects, setProjects] = useState([])

const loadProjects = () => {
  axios
    .get(`${import.meta.env.VITE_API_URL}/projects`)
    .then((response) => {
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
            <div className="title-container">
                <div className="line"></div>
            <h1 className="title">Projects</h1>
            <div className="line"></div>
            </div>
        
        <div className="projectdiv">
        {projects.map((project) => {
            return (
              <div key={project.id} className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  {/* <img
                    src={`src/assets/${project.image}`}
                    alt={project.name}
                  /> */}
                  <p>{project.id}</p>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{project.name}</h2>
                  <p>{project.oneliner}</p>
                  <div className="card-actions justify-end">
                  <Link to={`/projectdetails/${project.id}`}>
                    <button className="btn btn-primary">See more details</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
        })}
        </div>
        </div>
    )
}

export default Projects
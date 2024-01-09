import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
useParams

function ProjectDetails () {
const [project, setProject] = useState({})
const {projectId} = useParams()

const loadDetails = () => {
    axios
    .get(`${import.meta.env.VITE_API_URL}/projects/${projectId}`)
    .then((response) => {
        setProject(response.data)

    })
    .catch((error) => {
        console.log("Error getting project details", error)
    })
}
console.log(project.technologies)

useEffect(() => {
    loadDetails()
}, [projectId])

    return (
        <div>
            <a href={project.URL}>
            <h2>{project.name}</h2>  
            </a>
            <p>{project.description}</p>     
            
                {/* {project.technologies.map((technology) => {
                    return <p>{technology}</p>
                })} */}
        </div>
    )
}

export default ProjectDetails
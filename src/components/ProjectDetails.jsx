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

useEffect(() => {
    loadDetails()
}, [projectId])

    return (
        <div>
            <h2>{project.name}</h2>  
            <p>{project.description}</p>     
            
                {project.skills.map((skill) => {
                    return <p>{skill}</p>

                })}
        </div>
    )
}

export default ProjectDetails
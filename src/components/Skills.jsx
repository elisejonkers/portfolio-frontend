import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Skills () {
const [skills, setSkills] = useState([])

const loadSkills = () => {
    axios
    .get(`${import.meta.env.VITE_API_URL}/skills`)
    .then((response) => {
        setSkills(response.data)
    })
    .catch((error) => {
        console.log("This is error in getting skills", error)
    })
}

const typeOfSkill = (skill) => {
    if (skill.type === "hard") {
        return <span className="hard">{skill.name}</span>
    } else if (skill.type === "soft") {
        return <span className="soft">{skill.name}</span>
    }
}

useEffect(() => {
    loadSkills()
}, [])

return (
    <div>
        {skills.map((skill) => {
            return (
                <div key={skill.id}>
                    <p>{typeOfSkill(skill)}</p> 
                </div>
            )
        })}
    </div>
)
    

}

export default Skills
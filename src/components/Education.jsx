import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Education () {
const [education, setEducation] = useState([])

const loadEducation = () => {
    axios
    .get(`${import.meta.env.VITE_API_URL}/education`)
    .then((response) => {
        setEducation(response.data)
    })
    .catch((error) => {
        console.log("This is error getting education", error)
    })
}

useEffect(() => {
    loadEducation()
}, [])

    return (
        <div>
            {education.map((course) => {
                return (
                <div key={course.id}>
                    <p>{course.title}</p>
                    <p>{course.date}</p>
                </div>
                )
            })}
        </div>
    )
}

export default Education
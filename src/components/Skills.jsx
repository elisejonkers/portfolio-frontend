import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Skills () {
  const [skills, setSkills] = useState([]);

  const loadSkills = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/skills`)
      .then((response) => {
        setSkills(response.data);
      })
      .catch((error) => {
        console.log("This is error in getting skills", error);
      });
  };

  const typeOfSkill = (skill) => {
    if (skill.type === "hard") {
      return <span className="hard badge">{skill.name}</span>;
    } else if (skill.type === "soft") {
      return <span key={skill.id} className="soft badge">{skill.name}</span>;
    }
  };

  useEffect(() => {
    loadSkills();
  }, []);

  return (
    <div>
      <div className="title-container">
            <h1 className="title">Skills</h1>
            </div>

      <div className="skills-container">
        {skills.map((skill) => {
          return typeOfSkill(skill)
        })}
        </div>
      </div>
  );
}

export default Skills
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
      return <div className="hard">{skill.name}</div>;
    } else if (skill.type === "soft") {
      return <div key={skill.id} className="soft">{skill.name}</div>;
    }
  };

  useEffect(() => {
    loadSkills();
  }, []);

  return (
    <div>
      <h1>Skills</h1>
      <div className="skills-container">
        {skills.map((skill) => {
          return typeOfSkill(skill)
        })}
        </div>
      </div>
  );
}

export default Skills
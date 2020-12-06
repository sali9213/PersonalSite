import React from "react"
import { skills } from "../../data/skills.json"
import skillsStyles  from "./skills.module.css";

const Skills = () => {
  var column1 = []
  var column2 = []
  var column3 = []

  for (let index = 0; index < skills.length; index++) {
    const element = skills[index]
    const rem = index % 3
    if (rem === 0) column1.push(element)
    else if (rem === 1) column2.push(element)
    else column3.push(element)
  }

  return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 50,
        }}
      >
        <div>
          <ul>
            {column1.map(item => (
              <li key={item} className={skillsStyles.skill}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {column2.map(item => (
              <li key={item} className={skillsStyles.skill}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {column3.map(item => (
              <li key={item} className={skillsStyles.skill}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
  )
}

export default Skills

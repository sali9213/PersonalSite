import React from "react"
import experienceStyles from "./experience.module.css"
import { experienceData } from "../../data/experience.json"

const Experience = () => {
  return (
    <div>
      {experienceData.map((item, index) => (
        <div key={index} className={experienceStyles.experiencecontainer}>
          <h3 className={experienceStyles.jobTitle}>
            {item["Company Name"] +
              " - " +
              item["City"] +
              ", " +
              item["Country"]}
          </h3>
          <p className={experienceStyles.dates}>{item.From} - {item.To}</p>
          <p>
            <i>{item["Company Description"]}</i>
          </p>
          <div>
            <ul>
              {item["Bullet points"].map((item, index) => (
                <li key={index} className={experienceStyles.listitem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Experience

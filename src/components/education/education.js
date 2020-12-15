import React  from "react";
import education from "../../data/education.json"
import Section from "../section/section";
import educationStyles from "./education.module.css"


const Education = () => {

  return (
    <div>
      <h3 className={educationStyles.heading}>{education.university_name} - {education.location.city}, {education.location.country}</h3>
      <p className={educationStyles.dates}>{education.from} - {education.to}</p>
      <p>{education.degree_title}</p>
      <p><i>Grade: {education.grade}</i></p>
    </div>
  )
}

export default Education;
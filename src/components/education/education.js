import React  from "react";
import education from "../../data/education.json"
import Section from "../section/section";


const Education = () => {

  return (
    <div>
      <h3>{education.university_name} - {education.location.city}, {education.location.country}</h3>
      <p>{education.degree_title}</p>
      <p><i>Grade: {education.grade}</i></p>
    </div>
  )
}

export default Education;
import  React  from "react";
import sectionStyles  from "./section.module.css";

const Section = (props) => {
  return(
    <div className={sectionStyles.container}>
      <div className={sectionStyles.title}>
      <h2>
        {"> "}{props.title}
      </h2>
      </div>
      <div className={sectionStyles.content}>
        {props.children}
      </div>
    </div>
  )
}

export default Section;
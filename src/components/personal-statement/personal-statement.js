import React from "react"
import personalStatementStyles  from "./personal-statement.module.css";

const PersonalStatement = () => {
  return (
    <div>
      <p className={personalStatementStyles.statement}>
        Hi! I'm Syed, a passionate programmer and problem-solver.
        I love formulating creative solutions to real-world problems and pride
        myself on the quality of my work. If you would like to discuss any new opportunities
        shoot me an email by clicking '<a
              href="mailto:ali.syed.w2@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Me
            </a>' above.
      </p>
    </div>
  )
}

export default PersonalStatement;
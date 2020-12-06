import React from "react"
import Education from "../components/education/education";
import Header from "../components/header/header"
import PersonalStatement from "../components/personal-statement/personal-statement";
import Skills from "../components/skills/skills";
import Section from "../components/section/section";


const IndexPage = () => (
  <div>
  <Header></Header>
    <div className="main-body">
    <Section title="About Me">
      <PersonalStatement></PersonalStatement>
    </Section>
    <Section title="Skills">
      <Skills></Skills>
    </Section>
    <Section title="Education">
      <Education></Education>
    </Section>
    </div>
  </div>
)

export default IndexPage

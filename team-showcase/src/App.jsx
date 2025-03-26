import React from "react";
import TeamMemberCard from "./components/TeamMemberCard";

function App () {
  return(

  <div>
    <h1>Team Member Card</h1>
    <TeamMemberCard name="John Doe" jobtitle= "Software Engineer" /> <br /> <hr />
    <TeamMemberCard name="Hariharan" jobtitle= "Full Stack Engineer" /> <br /> <hr />
    <TeamMemberCard name="Alice" jobtitle= "Java Developer" />

  </div>
  )
}
export default App;
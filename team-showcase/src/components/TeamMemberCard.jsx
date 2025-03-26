import React from "react";
// import "./TeamMemberCard.css"

const TeamMemberCard = ({name, jobtitle}) =>{
  return(
    <div className="card">
      <h2>Name: {name} </h2>
      <p>Job title: {jobtitle} </p>
    </div>
  )
}
export default TeamMemberCard;
/* eslint-disable jsx-a11y/img-redundant-alt */
import "./WorkCardStyle.css";
import React from 'react'
function WorkCard(props) {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image"></img>
      <h2 className="project-title">{props.title}</h2>
      <h3 className="techused">Technologies-{props.tech}</h3>
      <div className="pro-details">
        <p className="project-text">{props.text}</p>
        <div className="pro-btns">
          <a href={props.view} rel="noppener" className="btn">View</a>
          <a href={props.source} rel="noppener" className="btn">Source</a>
        </div>
      </div>
    </div>
  );
}

export default WorkCard
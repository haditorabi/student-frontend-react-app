import React, { useState } from "react";
import "./Student.css";

import { ExpandIcon, HideIcon } from "../Icons/Icons";
import TagForm from "../TagForm/TagForm";
import { getAverage } from "../../utils";

const Student = (props) => {
  const [expandView, setExpandView] = useState(false);
  const index = props.index
  const addTag = props.addTag
  const {
    tags,
    pic,
    firstName,
    lastName,
    email,
    company,
    skill,
    grades,
  } = props.student;

  const name = `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
  const average = getAverage(grades);

  return (
    <div className="student-card-container" data-testid="student-row">
      <div className="student-card">
        <div className="image-container">
          <img className="pic" src={pic} alt={name} width="150" height="150" />
        </div>
        <div className="text-container">
          <h1 className="student-name">{name}</h1>
          <div className="text">
            <p>Email: {email}</p>
            <p>Company: {company}</p>
            <p>Skill: {skill}</p>
            <p>Average: {average}%</p>
          </div>
          {tags && tags.length > 0 ? (
            <div className="tag-container">
            {tags.map((tag, idx) => <div key={idx} className="tag">{tag}</div>)}
            </div>
          ) : (
            null
          )}
          <TagForm addTag={addTag} index={index} />
          {expandView && (
            <div className="grades-container">
              {grades.map((grade, idx) => {
                return (
                  <p key={idx}>
                    {`Test ${(idx + 1)} : `}<b>{`${grade}%`}</b>
                  </p>
                );
              })}
            </div>
          )}
        </div>
        <div className="button-container">
          {expandView ? (
            <HideIcon setExpandView={setExpandView} expandView={expandView} />
          ) : (
            <ExpandIcon setExpandView={setExpandView} expandView={expandView} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Student;

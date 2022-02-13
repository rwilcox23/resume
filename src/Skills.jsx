import React from 'react';
import skillData from "./data/skills.json";

function Skills(props) {

  let skills = skillData.map(Skill);
  return (
    <section className="mt-3">
      <h5 className="mb-3">Skills</h5>
      {skills}
    </section>
  );
}

function Skill(s, i) {
  const maxSkill = 5;
  let pct = s.score / maxSkill * 100 + "%";
  return (
    <div key={i} className="Skill mt-2 d-flex justify-content-end">
      <div className="font-weight-bold text-black pe-3 ">{s.skill}</div>
      <div className="progress w-50">
        <div className="progress-bar progress-bar-striped bg-dark"
          style={{ width: pct }}
          role="progressbar"
          aria-valuenow={s.score}
          aria-valuemin="0"
          aria-valuemax={maxSkill}></div>
      </div>
    </div>

  )
}


export default Skills;

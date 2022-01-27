import React from 'react';
import schoolData from "./data/education.json";

function Education(props) {

  let schools = schoolData.map(School);

  return (
    <section className="mt-3">
      <h5>Education</h5>
      {schools}
    </section>
  );
}


function School(s, i) {

  return (
    <div key={i}>
      <h6 className="d-flex justify-content-between mb-0">
        {s.school} <div className="text-muted">{s.year}</div>
      </h6>
      <div className="text-muted">{s.location}</div>
      <div className="row mb-2">
        <div className="col-12 col-md-10">{s.degree}</div>
      </div>
    </div>
  )
}

export default Education;

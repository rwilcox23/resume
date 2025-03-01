import React from 'react';
import jobData from "./data/work.json";

function Work(props) {
  const jobs = jobData.map(Job);

  return (
    <section className="mt-3">
      <h5>Experience</h5>

        {jobs}


    </section>
  );
}

function Job(j, i) {

  let end = j.end;

  if (end === -1) {
    end = <em>present</em>;
  }

  return (
    <ul>
      <li>
    <div key={i}>
      <h6 className="d-flex justify-content-between mb-0">
        {j.title} <div className="text-muted">{j.start} - {end}</div>
      </h6>
      <div className="text-muted"><a href={j.link}>{j.org}, {j.where}</a></div>
      <div className="row mb-2">
        <div className="col-12 col-md-10 mb-2">{j.desc}</div>
      </div>
    </div>
    </li>
  </ul>
  )
}
export default Work;

import React from 'react';
import certData from "./data/cert.json";

function Cert(props) {
  const certs = certData.map(Certification);

  return (
    <section className="mt-3">
      <h5>Certifications</h5>

        {certs}


    </section>
  );
}

function Certification(c, i) {



  return (
    <ul><li>
    <div key={i}>
      <h6 className="d-flex justify-content-between mb-0">
        {c.certification} <div className="text-muted">{c.year}</div>
      </h6>
      <div className="text-muted">{c.institution}</div>
      <div className="row mb-2">
        <div className="col-12 col-md-10 mb-2">{c.desc}</div>
      </div>
    </div>
    </li></ul>
  )
}
export default Cert;

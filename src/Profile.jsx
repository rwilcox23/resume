import React from 'react';
import profileImg from "./res/mxc-profile-sq.jpg";

function Contact(props) {
  return (
    <section className="text-center mb-2 semiTrans p-3 rounded">
      <div>
        <a href="https://matt.curinga.com"
          title="go to matt's site">https://matt.curinga.com</a>
      </div>
      <div><a href="mailto:mcuringa@adelphi.edu">mcuringa@adelphi.edu</a></div>
    </section>
  )
}


function ProfileImg(props) {

  return (
    <img className="mx-auto d-md-block d-sm-none mb-3 img-fluid" src={profileImg}
      alt="headshot of matt" />
  )

}


function Bio(props) {
  return (
    <section className="Bio">
      <p className="text-justify mb-3">
        I'm an experienced software developer and dedicated researcher of
        digital media. I'm especially intersted in the politics of software
        and software culture. I'm currently working on projects related to
        informal, peer, and self-learning; computer science education; and
        augmented reality.
      </p>
    </section>
  );
}

export {Bio, Contact, ProfileImg};

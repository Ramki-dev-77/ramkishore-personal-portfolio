
import React from "react";

function AboutComponentBio({ heading, bio, children }) {
  return (
    <div className="story-text-col">
      <h3>{heading}</h3>
      <p>{bio}</p>
      {children}
    </div>
  );
}

function AboutComponentImg({ myImage, altText = "Illustration representing Ramkishore's journey" }) {
  return (
    <div className="story-image-col">
      <img src={myImage} alt={altText} loading="lazy" />
    </div>
  );
}

export { AboutComponentBio, AboutComponentImg };
import React from "react";

function SocialMediaComponent({ name, link, source }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="social-pill"
      title={name}
      aria-label={name}
    >
      <img src={source} alt={`${name} logo`} />
    </a>
  );
}

export default SocialMediaComponent;
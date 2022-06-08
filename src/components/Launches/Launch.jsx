import React from "react";

const Launch = ({ launch }) => {
  return (
    <div className="launch row">
      <h2>{launch.mission_name}</h2>
      <p className="launch__details">{launch.details}</p>
    </div>
  );
};

export default Launch;

import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Prepare to be amazed, because with GPT-3, "The Possibilities Are
          Beyond Your Imagination." From crafting intricate narratives to
          generating code, GPT-3 expands horizons you never thought possible.
          It's not just about what it can do; it's about what you can create
          with it. Break barriers, redefine norms, and venture into a realm
          where innovation knows no bounds. With GPT-3, the future is limited
          only by your imagination.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;

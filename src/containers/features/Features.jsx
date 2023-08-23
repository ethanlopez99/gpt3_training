import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Inspire Innovation with GPT-3",
    text: "Unleash innovation using GPT-3. From products to solutions, it sparks fresh ideas, propelling your endeavors to new horizons.",
  },
  {
    title: "Elevate Customer Interactions",
    text: "GPT-3 redefines customer engagement. From intuitive virtual assistants to natural chatbots, it ensures seamless communication and satisfaction, fostering lasting brand loyalty.",
  },
  {
    title: "Unleash Creativity Beyond Borders",
    text: "With GPT-3, creativity knows no bounds. Effortlessly transcending languages, it transforms ideas into global expressions, from stories to poetry, connecting you with a diverse audience worldwide.",
  },
  {
    title: "Transformative Learning Experiences",
    text: "Step into the future of education with GPT-3. Adapting to various learning styles, it offers interactive lessons, instant explanations, and personalized tutoring. Break free from traditional constraints and let GPT-3 redefine your learning journey.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;

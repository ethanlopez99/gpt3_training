import React from "react";
import "./whatGPT3.css";
import Feature from "../../components/feature/Feature";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="
          GPT-3 is a language model with 175 billion parameters that redefines human-computer interaction. It generates human-like text, enabling applications in chatbots, knowledgebases, education, and more, unlocking unprecedented possibilities in natural language processing."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Elevate chatbots to new heights with GPT-3. Transform interactions into captivating conversations, setting a new standard for user engagement and satisfaction."
        />
        <Feature
          title="Knowledgebase"
          text="Enhance your knowledgebase with GPT-3. Transform data into comprehensive articles, guides, and insights, revolutionizing user access to information like never before."
        />
        <Feature
          title="Education"
          text="Transform education using GPT-3. Personalized learning, interactive lessons—GPT-3 revolutionizes the learning experience for all."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;

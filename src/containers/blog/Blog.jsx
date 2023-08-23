import React from "react";
import "./blog.css";
import { Article } from "../../components";

import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            title="Unleashing Creative Potential: How GPT-3 Redefines Content Generation"
            postDate="Sep 26, 2021"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            title="Revolutionizing Customer Support: The Power of GPT-3 Chatbots"
            postDate="Sep 26, 2021"
          />
          <Article
            imgUrl={blog03}
            title="Beyond Translation: GPT-3's Role in Bridging Global Communication Gaps"
            postDate="Sep 26, 2021"
          />
          <Article
            imgUrl={blog04}
            title="From Knowledgebases to Knowledge Wonders: GPT-3's Impact on Learning"
            postDate="Sep 26, 2021"
          />
          <Article
            imgUrl={blog05}
            title="Innovating Tomorrow: GPT-3 as the Driving Force Behind Industry Disruption"
            postDate="Sep 26, 2021"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;

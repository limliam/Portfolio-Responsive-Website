import React from "react";
import "./blog.css";
import Image1 from "../../assets/blog-1.svg";
import Image2 from "../../assets/blog-2.svg";
import Image3 from "../../assets/blog-3.svg";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section_title">Latest Posts</h2>
      <div className="blog_container grid">
        {/* blog item */}
        <div className="blog_card">
          <div className="blog_thumb">
            <span className="blog_category">Reviews</span>
            <a
              href="https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-6.0"
              target="_blank"
            >
              <img src={Image1} alt="" className="blog_img" />
            </a>
          </div>
          <div className="blog_details">
            <h3 className="blog_title">What's New in ASP.NET Core</h3>
            <div className="blog_meta">
              <span>06 April, 2022</span>
              <span className="blog dot">.</span>
              <span>Microsoft</span>
            </div>
          </div>
        </div>
        {/* blog item */}
        <div className="blog_card">
          <div className="blog_thumb">
            <span className="blog_category">Tutorial</span>
            <a
              href="https://github.com/limliam/Portfolio-Responsive-Website"
              target="_blank"
            >
              <img src={Image2} alt="" className="blog_img" />
            </a>
          </div>
          <div className="blog_details">
            <h3 className="blog_title">Github: Project Source Codes</h3>
            <div className="blog_meta">
              <span>07 February, 2022</span>
              <span className="blog dot">.</span>
              <span>Liam</span>
            </div>
          </div>
        </div>
        {/* blog item */}
        <div className="blog_card">
          <div className="blog_thumb">
            <span className="blog_category">Project</span>
            <a
              href="https://northernproducts.azurewebsites.net/"
              target="_blank"
            >
              <img src={Image3} alt="" className="blog_img" />
            </a>
          </div>
          <div className="blog_details">
            <h3 className="blog_title">
              Northern Product Demo App (ASP.NET Core 6.0 Web App / Azure App
              Service)
            </h3>
            <div className="blog_meta">
              <span>02 February, 2022</span>
              <span className="blog dot">.</span>
              <span>Liam</span>
            </div>
          </div>
        </div>
        {/* blog item */}
      </div>
    </section>
  );
};

export default Blog;

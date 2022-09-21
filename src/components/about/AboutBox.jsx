import React from "react";

const AboutBox = () => {
  return (
    <div className="about_boxes grid">
      {/* about_box item */}
      <div className="about_box">
        <i className="about_icon icon-fire"></i>
        <div>
          <h3 className="about_title">217</h3>
          <span className="about_subtitle">Project completed</span>
        </div>
      </div>
      {/* about_box item */}
      <div className="about_box">
        <i className="about_icon icon-cup"></i>
        <div>
          <h3 className="about_title">5612</h3>
          <span className="about_subtitle">Cup of Coffee</span>
        </div>
      </div>
      {/* about_box item */}
      <div className="about_box">
        <i className="about_icon icon-people"></i>
        <div>
          <h3 className="about_title">372</h3>
          <span className="about_subtitle">Satisfied clients</span>
        </div>
      </div>
      {/* about_box item */}
      <div className="about_box">
        <i className="about_icon icon-badge"></i>
        <div>
          <h3 className="about_title">23</h3>
          <span className="about_subtitle">Certification</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;

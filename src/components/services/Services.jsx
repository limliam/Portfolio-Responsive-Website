import React from "react";
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image2,
    title: "Web App Development",
    description:
      "React.js, Next.js, javascript, CSS, Bootstrap, Tailwind css, Responsive website",
  },
  {
    id: 2,
    image: Image2,
    title: "ASP.NET Development",
    description:
      "C#, ASP.NET Core, MVC / Rager Pages, Entity Framework Core, Code/Database first, SqlServer / SQLite / MongoDB / Firebase",
  },
  {
    id: 3,
    image: Image2,
    title: "Cloud",
    description: "Azure App Service, AWS (AWS Cloud Practitioner 2021)",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section_title">Skills / Services</h2>

      <div className="services_container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services_card" key={id}>
              <img src={image} alt="" className="services_img" />
              <h3 className="services_title">{title}</h3>
              <p className="services_description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

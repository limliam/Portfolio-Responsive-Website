import React from "react";
import "./testimonials.css";
import Image1 from "../../assets/avatar-1.svg";
import Image2 from "../../assets/avatar-2.svg";
import Image3 from "../../assets/avatar-3.svg";
// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Claire Howel",
    subtitle: "CEO, Australasian College of Road Safety",
    comment:
      "I wanted to thank you for being such a pleasure to work with. Thanks again. You were wonderful to work with and we will certainly call you again in the future.! 👍",
  },
  {
    id: 2,
    image: Image2,
    title: "Carla Joia",
    subtitle: "Trade Advisers, Consulate General of Brazil in Sydney",
    comment:
      "We want you to know how much we appreciate the excellent service you provided for our project. Your attention to detail and your professionalism was greatly appreciated. Looking forward to working with you in the future. 👍",
  },
  {
    id: 3,
    image: Image3,
    title: "Eliza Matlioska",
    subtitle: "Product designer, Think Business",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
];

const Testimonials = () => {
  return (
    <div>
      <section className="testimonials container section">
        <h2 className="section_title">Reviews</h2>

        {/* Swiper */}
        <Swiper
          className="testimonials_container grid"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
        >
          {data.map(({ id, image, title, subtitle, comment }) => {
            return (
              <SwiperSlide className="testimonials_item" key={id}>
                <div className="thumb">
                  <img src={image} alt="" />
                </div>
                <h3 className="tetstimonials_title">{title}</h3>
                <span className="subtitle">{subtitle}</span>
                <div className="comment">{comment}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* Swiper */}
      </section>
    </div>
  );
};

export default Testimonials;

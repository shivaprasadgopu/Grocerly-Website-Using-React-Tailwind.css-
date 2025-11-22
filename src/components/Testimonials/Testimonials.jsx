import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa6";

const review = [
  {
    id: 1,
    image: Customer1,
    name: "Aarav Sharma",
    profession: "Chef",
    rating: 5,
    para: "Grocerly provides the freshest ingredients! Perfect for my restaurant cooking."
  },
  {
    id: 2,
    image: Customer2,
    name: "Priya Verma",
    profession: "Model",
    rating: 4,
    para: "Quality is amazing and packaging is premium. My go-to grocery site!"
  },
  {
    id: 3,
    image: Customer3,
    name: "Rohan Das",
    profession: "Fitness Coach",
    rating: 5,
    para: "I rely on Grocerly for clean and organic food. Highly recommended!"
  },
  {
    id: 4,
    image: Customer4,
    name: "Neha Gupta",
    profession: "Nutritionist",
    rating: 5,
    para: "Their organic vegetables and fruits are truly top quality."
  },
  {
    id: 5,
    image: Customer5,
    name: "Vikram Singh",
    profession: "Home Chef",
    rating: 4,
    para: "Very fresh dairy and meat products. My family loves the quality!"
  }
];

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1400px] px-10 py-20 mx-auto">
        <Heading highlight="Customers" heading="Saying" />

        {/* Custom Navigation Buttons */}
        <div className="flex justify-end mt-5 py-5 gap-x-3">
          <button className="custom-prev text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b from-green-400 hover:to-green-500 hover:text-white cursor-pointer">
            <IoIosArrowBack />
          </button>

          <button className="custom-next text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b from-green-400 hover:to-green-500 hover:text-white cursor-pointer">
            <IoIosArrowForward />
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {review.map((item, index) => (
            <SwiperSlide
              key={item.id} // Unique key for each review
              className="bg-zinc-100 rounded-xl p-8"
            >
              <div className="flex gap-5 items-center">
                <div className="w-16 h-16 rounded-full outline-2 outline-green-500 outline-offset-4 overflow-hidden">
                  <img src={item.image} alt="" className="w-full h-full" />
                </div>

                <div>
                  <h5 className="text-xl font-bold">{item.name}</h5>
                  <p className="text-zinc-600">{item.profession}</p>

                  <span className="flex text-yellow-400 text-xl gap-1">
                    {Array.from({ length: item.rating }).map((_, starIndex) => (
                      <FaStar
                        key={`${item.id}-star-${starIndex}`} // Unique key for stars
                      />
                    ))}
                  </span>
                </div>
              </div>

              <div className="mt-10 min-h-[28vh]">
                <p className="text-zinc-600">{item.para}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

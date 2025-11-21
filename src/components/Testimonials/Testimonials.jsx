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

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1400px] px-10 py-20 mx-auto">
        <Heading highlight="Customers" heading="Saying" />
        <div className=" flex justify-end  mt-5 py-5 gap-x-3 ">
          <button className=" custom-prev text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b from-green-400 hover:to-green-500 hover:text-white cursor-pointer">
            <IoIosArrowBack />
          </button>
          <button className="custom-next text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b from-green-400 hover:to-green-500 hover:text-white cursor-pointer">
            <IoIosArrowForward />
          </button>
        </div>
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
          {review.map((item) => {
            return (
              <SwiperSlide className=" bg-zinc-100 rounded-xl p-8 ">
                <div className="flex gap-5 items-center ">
                  <div className="w-16 h-16 rounded-full outlinr-2 outline-green-500 outline-offset-4 overflow-hidden">
                    <img src={item.image} className="w-full h-full"/>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold ">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="flex text-yellow-400 text-xl gap-1">
                      {Array.from({ length: item.rating }, (_, index) => (
                        <FaStar />
                      ))}
                    </span>
                  </div>
                </div>
                <div className="mt-10 min-h-[28vh]">
                  <p className="text-zinc-600">{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Emily Jhonson",
    profession: "Food Blogger",
    rating: 3,
    para: "Grocerly has completely changed how I buy groceries. The products are always fresh, well-packed, and arrive earlier than expected. I especially love their organic range—it genuinely feels chemical-free and natural. Their service feels reliable, and I trust them for my family’s daily needs.",
    image: Customer1,
  },
  {
    id: 2,
    name: "David Smith",
    profession: "Chef",
    rating: 4,
    para: "As a chef, ingredient quality decides everything—and Grocerly has impressed me consistently. Their vegetables are crisp, herbs are aromatic, and the organic produce tastes incredibly fresh. I can tell proper sourcing and cold-chain logistics are in place. Grocerly makes home cooking feel restaurant-grade.",
    image: Customer2,
  },
  {
    id: 3,
    name: "Alya Zahra",
    profession: "Model",
    rating: 5,
    para: "Being a model means staying fit, healthy, and glowing from the inside out—and Grocerly has become my secret partner in that. Their fresh fruits and organic veggies keep my diet clean and vibrant. I love how every item feels premium and thoughtfully sourced. Trusting Grocerly makes maintaining a healthy lifestyle effortless.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    rating: 5,
    para: "Grocerly has genuinely changed the way I plan meals for myself and my clients. The freshness is unmatched, and the ingredients feel safe, natural, and nutrient-rich. Their attention to food safety and sourcing helps me guide people with confidence. A perfect partner for anyone serious about fitness",
    image: Customer4,
  },
  {
    id: 5,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    rating: 4,
    para: "As a nutritionist, I pay close attention to the source and freshness of ingredients, and Grocerly has exceeded my expectations every time. Their produce is nutrient-rich, clean, and handled with proper safety. This quality makes it easy for me to recommend healthier meal plans to my patients. Grocerly has become a reliable partner in promoting balanced nutrition.",
    image: Customer5,
  },
];

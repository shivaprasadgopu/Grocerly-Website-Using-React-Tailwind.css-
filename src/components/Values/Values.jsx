import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png";

const Values = () => {
  const leftValues = value.slice(0, 2).map((item) => {
    return (
      <div
        key={item.id}
        className="flex md:flex-row-reverse items-center gap-7"
      >
        <div>
          <span className=" flex justify-center items-center text-3xl text-white bg-gradient-to-b from-green-400 to-green-500 w-15 h-15 rounded-full">
            {item.icon}
          </span>
        </div>
        <div className="md:text-right">
          <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });
  const rightValues = value.slice(2).map((item) => {
    return (
      <div key={item.id} className="flex items-center gap-7 ">
        <div>
          <span className=" flex justify-center items-center text-3xl text-white bg-gradient-to-b from-green-400 to-green-500 w-15 h-15 rounded-full">
            {item.icon}
          </span>
        </div>
        <div>
          <h3 className="text-zinc-800 text-3xl text- font-bold">
            {item.title}
          </h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-1 py-20">
        <Heading highlight="Our" heading="Value" />
        <div className="flex md:flex-row flex-col gap-15 md:gap-5 mt-15">
          {/* Left Values */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {leftValues}
          </div>

          <div className="md:flex w-1/2 hidden ">
            <img src={Basket} />
          </div>
          {/* Right Values */}
          <div className="md:min-h-100 flex flex-col justify-between">
            {rightValues}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const value = [
  {
    id: 1,
    title: "Trust",
    para: "At Grocerly, your trust comes first.We work only with verified suppliers, maintain clean storage, and ensure every product meets our quality standards.When you shop with us, you shop with confidence.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "Freshness is at the heart of everything we do.From farm to doorstep, our products are handled with care and delivered quickly, keeping your groceries crisp, natural, and always fresh.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "Your family’s health matters.That’s why Grocerly follows strict hygiene and safety practices—temperature-controlled storage, sanitized packaging, and trusted sourcing.Every item is delivered clean, safe, and ready to enjoy.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "At Grocerly, we bring you ingredients that are 100% certified organic, grown without any harmful chemicals or artificial enhancers. Every product is carefully sourced from trusted farms that follow the highest organic farming standards.",
    icon: <FaSeedling />,
  },
];

import React from "react";
import Grocery from "../../assets/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section>
      <div className="min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-35">
        {/* Hero Content */}
        <div className="flex-1">
            <span className="bg-green-100 text-green-500 text-lg px-5 py-2 rounded-full">Export Best Quality...</span>
            <h1 className="md:text-7xl/20 text-5xl/14 font-bold mt-4 ">
              Tasty Organic <span  className="text-green-500" >Fruits</span> &<span className="text-green-500" > Veggies</span><br /> In Your city
            </h1> 
            <p className="text-zinc-600 md:text-1g text-md max-w-[530px] mt-5 mb-10">
              Bred for a high content of beneficial substances.Our products are all fresh and healthy.
            </p>
            <Button content="Show Now" />
        </div>
        {/* Hero Image */}
        <div className="flex-1">
          <img src={Grocery}></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import heroImg from '../../../assests/fruitshop.png'
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-white mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={heroImg}
          className="max-w-sm md:max-w-lg rounded-lg"
        />
        <div>
          <h1 className="text-4xl font-bold">Fruit <span className="text-orange-500"> Mart</span></h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn border-transparent text-white font-bold bg-orange-500 hover:bg-orange-400 hover:border-transparent">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

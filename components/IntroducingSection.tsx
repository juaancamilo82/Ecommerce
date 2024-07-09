

import Link from "next/link";
import React from "react";

const IntroducingSection = () => {
  return (
    <div className="py-20 pt-24 bg-gradient-to-l-custom">
      <div className="text-center flex flex-col gap-y-5 items-center">
      <h2 className="text-8xl font-extrabold text-center mb-2 max-md:text-6xl max-[480px]:text-4xl">
      <span className="text-white">TODOS </span>
      <span className="text-gray-700">LOS </span>
      <span className="text-custom-dark">PRODUCTOS</span>
    </h2>
   
        <div>
          
          <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
           
          </p>
          <Link href="/shop" className="block text-custom-dark bg-white font-bold px-12 py-3 text-xl hover:bg-gray-100 w-96 mt-2  max-md:text-lg max-md:w-72 max-[480px]:w-60 mx-auto">
            COMPRAR AHORA
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroducingSection;

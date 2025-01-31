import React from "react";
import Image from "next/image";

const Survey = () => {
  return (
    <div className="container mx-auto pt-40">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <Image
            className="w-full h-auto lg:h-[90vh]"
            src="/survey.png"
            width={800}
            height={600}
            alt="survey image"
          />
        </div>
        <div className="self-center">
          <h2 className="text-4xl md:text-6xl font-bold">Survey</h2>
          <h2 className="text-4xl md:text-6xl font-bold pt-3">
            About our <span className="text-accent">Food</span>
          </h2>

          <p className="text-gray-700 pt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            vel, repudiandae fugiat veritatis blanditiis consectetur? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Fuga, dicta!
          </p>

          <p className="text-gray-700 pt-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            vel, repudiandae fugiat veritatis blanditiis consectetur? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Fuga, dicta!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Survey;

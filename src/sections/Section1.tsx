import Button from "../components/Button"

import React from "react";

function Section1({ text, video }) {
  return (
    <section className="my-5">
      <div className="container max-w-[1280px] mx-auto px-[20px]">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-[46px] text-[#1d1d1f] text-center max-w-[900px] mt-40 mb-20 inline-block">{text}</h2>
          <div className="w-full">
            <video autoPlay loop>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* <Button primary link={"https://chat.openai.com/"}/>
        <Button secondary/> */}
      </div>
    </section>
  );
}

export default Section1;

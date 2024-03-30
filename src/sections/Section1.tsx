import React from 'react';
import Button from "../components/Button"

function Section1(props) {
    return (
        <section className="container max-w-[1280px] mx-auto px-[20px]">
            <div className="flex flex-col justify-center items-center gap-10">
                <h2 className="font-bold text-[42px] text-[#1d1d1f] text-center max-w-[900px] mt-40 mb-20 inline-block">You’ve never seen everything like this before.</h2>
                <div className="img">
                    <img src="../../src/assets/img/logo.png" alt="img" />
                </div>
               <div className="flex flex-col justify-center items-center gap-4">
               <a className="text-orange-700   font-semibold text-[24px] inline-block hover:" href="https://www.apple.com/apple-vision-pro/guided-tour/" target="_blank" rel="noopener noreferrer">Watch the film</a>
                <a className="text-orange-700   font-semibold text-[24px] inline-block hover:" href="https://www.apple.com/apple-vision-pro/guided-tour/" target="_blank" rel="noopener noreferrer">Watch the Guided Tour</a>
               </div>
               <div className="img">
                    <img src="../../src/assets/img/ochki.jpg" alt="" />
                </div>
                <div className=" ">
                <Button secondary />
                </div>
            </div>
        </section>
    );
}

export default Section1;
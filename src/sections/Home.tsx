import React from 'react';
import  { Link }  from "react-router-dom";


function Home(props) {
    return (
        <section className="bg-black">
            <div className="container max-w-[1280px] mx-auto px-[20px]">
                <div className="relative">
                <div className="w-full">
                <img className="w-[60%] mx-auto" src="../../src/assets/img/home.jpg" alt="img" />
                </div>
                <div className="max-w-[300px] absolute bottom-6 right-[37%] text-center">
                    <div className="img p-2">
                    <img className="w-full" src="../../src/assets/img/logo.png" alt="logo" />
                    </div>
                    <a className="text-orange-700  p-4 font-semibold text-[24px] inline-block hover:" href="https://www.apple.com/apple-vision-pro/guided-tour/" target="_blank" rel="noopener noreferrer">
                  Watch the Guided Tour
                  </a>
                </div>
                 
                
                </div>
            </div>
            
        </section>
    );
}

export default Home;
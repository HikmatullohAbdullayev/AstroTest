// import React from 'react';


// function Section1({text, video,}) {
//     return (
//         <section className="">
//             <div className="container max-w-[1280px] mx-auto px-[20px]">
//                 <div className="flex flex-col items-center">
//                     <h2>{text}</h2>
//                     <div className="w-full">
//                     <video  autoPlay >
//                         <source src={video} >
  
//                     </video>
                    
//                 </div>
//                 </div>
//             </div>
            
//         </section>
//     );
// }

// export default Section1;


import React from 'react';

function Section1({ text, video }) {
    return (
        <section className="">
            <div className="container max-w-[1280px] mx-auto px-[20px]">
                <div className="flex flex-col items-center">
                    <h2>{text}</h2>
                    <div className="w-full">
                    <video autoPlay loop >
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
</video>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section1;

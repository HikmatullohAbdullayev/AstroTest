import React from 'react';
  
function Header(props) {
    return (
        <div className="bg-black fixed z-10 w-full ">
            <div className="flex justify-between items-center max-w-[1080px] container py-2 px-[20px] mx-auto opacity-95 ">
            <h1 className="font-bold text-2xl text-white">Apple Vision Pro </h1>
            <div className="nav">
                <ul className="flex justify-between items-center gap-5">
                    <li>
                        <a className="text-gray-400 text-[14px]" href="/" target="_blank" rel="noopener noreferrer">
                            Overview
                        </a>
                    </li>
                    <li>
                        <a className="text-white text-[14px]" href="https://www.apple.com/apple-vision-pro/guided-tour/" target="_blank" rel="noopener noreferrer">
                        Guided
                        </a>
                    </li>
                    <li>
                        <a className="text-white text-[14px]" href="https://www.apple.com/apple-vision-pro/specs/" target="_blank" rel="noopener noreferrer">
                        TourTech
                        </a>
                    </li>
                    <li>
                        <a className="text-white text-[14px] border border-white border-solid rounded-2xl py-1 px-2 " href="https://idmsa.apple.com/IDMSWebAuth/signin?appIdKey=e48e92b8e87335f23bb1750ece469d3bbbe1ab73117d9ec66246b5f5a02dcf2c&language=US-EN&rv=1&path=%2Fretail%2Finstore-shopping-session%2Fsession-selection%2F%3Ftopic%3Dvisionpro%26resToken%3Dd23cd3e0-c95a-be91-c1a1-18781bfbae51" target="_blank" rel="noopener noreferrer">
                      Book a demo
                        </a>
                    </li>
                    <li>
                        <a className="text-white text-[14px] bg-blue-600 rounded-2xl py-1 px-2" href="https://www.apple.com/shop/buy-vision/apple-vision-pro" target="_blank" rel="noopener noreferrer">
                        Buy
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
        </div>
    );
}

export default Header;
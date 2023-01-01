import { prefix } from "utils/const";
import Image from "./image-fallback-next";

export default function LogoSlider() {
  return (
    <>
      <div className="mx-auto mb-9 md:mb-24">
        <div class="slider h-[16vh] md:h-[30vh] flex items-start md:items-stretch">
          <div class="slide-track">
            <div class="slide w-48 h-24 md:w-80 md:h-36 relative backdrop-blur-sm bg-white/50 drop-shadow-2xl rounded-lg">
              <h2 className="text-gray-500 text-2xl font-bold">React</h2>
            </div>
            <div class="slide w-48 h-24 md:w-80 md:h-36 relative backdrop-blur-sm bg-white/50 drop-shadow-2xl rounded-lg">
              <Image className="p-6 md:p-[3.2rem]"
                src={`${prefix}/home/stack-slider/webpack.png`}
                alt="webpack fadhel ijlal falah"
              />
            </div>
            <div class="slide w-48 h-24 md:w-80 md:h-36 relative backdrop-blur-sm bg-white/50 drop-shadow-2xl rounded-lg">
              <Image className="p-6 md:p-[3.2rem]"
                src={`${prefix}/home/stack-slider/nextjs-icon.png`}
                alt="nextjs fadhel ijlal falah"
              />
            </div>
            <div class="slide w-48 h-24 md:w-80 md:h-36 relative backdrop-blur-sm bg-white/50 drop-shadow-2xl rounded-lg">
              <Image className="p-6 md:p-[3.2rem]"
                src={`${prefix}/home/stack-slider/gatsby-icon.png`}
                alt="gatsbyjs fadhel ijlal falah"
              />
            </div>
            <div class="slide w-48 h-24 md:w-80 md:h-36 relative backdrop-blur-sm bg-white/50 drop-shadow-2xl rounded-lg">
              <Image className="p-6 md:p-[3.2rem]"
                src={`${prefix}/home/stack-slider/flutter.png`}
                alt="flutter fadhel ijlal falah"
              />
            </div>
            <div class="slide w-48 h-24 md:w-80 md:h-36 relative backdrop-blur-sm bg-white/50 drop-shadow-2xl rounded-lg">
              <h2 className="text-gray-500 text-2xl font-bold">MobX</h2>
            </div>
            <div class="slide w-48 h-24 md:w-80 md:h-36 relative backdrop-blur-sm bg-white/50 drop-shadow-2xl rounded-lg">
              <h2 className="text-gray-500 text-2xl font-bold">Zustand</h2>
            </div>
            <div class="slide w-48 h-24 md:w-80 md:h-36 relative backdrop-blur-sm bg-white/50 drop-shadow-2xl rounded-lg">
              <h2 className="text-gray-500 text-2xl font-bold">Redux</h2>
            </div>
            <div class="slide w-48 h-24 md:w-80 md:h-36 relative backdrop-blur-sm bg-white/50 drop-shadow-2xl rounded-lg">
              <Image className="p-6 md:p-[3.2rem]"
                src={`${prefix}/home/stack-slider/tensorflow-logo.png`}
                alt="tensorflow fadhel ijlal falah"
              />
            </div>
            <div class="slide w-48 h-24 md:w-80 md:h-36 relative backdrop-blur-sm bg-white/50 drop-shadow-2xl rounded-lg">
              <h2 className="text-gray-500 text-2xl font-bold">Sklearn</h2>
            </div>
            <div class="slide w-48 h-24 md:w-80 md:h-36 relative backdrop-blur-sm bg-white/50 drop-shadow-2xl rounded-lg">
              <h2 className="text-gray-500 text-2xl font-bold">Express.js</h2>
            </div>
            <div class="slide w-48 h-24 md:w-80 md:h-36 relative backdrop-blur-sm bg-white/50 drop-shadow-2xl rounded-lg">
              <Image className="p-6 md:p-[3.2rem]"
                src={`${prefix}/home/stack-slider/mysql.png`}
                alt="mysql fadhel ijlal falah"
              />
            </div>
            <div class="slide w-48 h-24 md:w-80 md:h-36 relative backdrop-blur-sm bg-white/50 drop-shadow-2xl rounded-lg">
              <Image className="p-6 md:p-[3.2rem]"
                src={`${prefix}/home/stack-slider/laravel.png`}
                alt="laravel fadhel ijlal falah"
              />
            </div>
            <div class="slide w-48 h-24 md:w-80 md:h-36 relative backdrop-blur-sm bg-white/50 drop-shadow-2xl rounded-lg">
              <h2 className="text-gray-500 text-2xl font-bold">GraphQL</h2>
            </div>
            <div class="slide w-48 h-24 md:w-80 md:h-36 relative backdrop-blur-sm bg-white/50 drop-shadow-2xl rounded-lg">
              <h2 className="text-gray-500 text-2xl font-bold">MongoDB</h2>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(calc(350px * 5));
            }
            100% {
              transform: translateX(calc(-350px * 17));
            }
          }
        `}
      </style>
      <style>
        {`

          .slider {
            margin: auto;
            overflow: hidden;
            position: relative;
            width: auto;
          }
          
          .slide-track {
            animation: scroll 45s linear infinite;
            display: flex;
            gap: 3rem;
            /* width: calc(150px * 24) */;
          }
          .slide {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            align-self: center;
            word-wrap: break-word;
          }
          .slide img {
            display: block;
            object-fit: contain;
            -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
            filter: grayscale(100%);
          }
          .slide img:hover {
            -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
            filter: grayscale(0%);
          }
          .slide-track:has(> .slide:hover) {
            animation-play-state: paused!important;
          }
        `}
      </style>
    </>
  );
}

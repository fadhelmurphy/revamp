export default function LogoSlider() {
  return (
    <>
      <div className="container px-8 md:p-8 md:p-0 mx-auto mb-24">
        <div class="slider backdrop-blur-sm bg-white/50 drop-shadow-2xl rounded-lg flex items-stretch">
          <div class="slide-track">
            <div class="slide">
              <h2 className="text-gray-500 text-2xl font-bold">React</h2>
            </div>
            <div class="slide">
              <img
                src="/home/stack-slider/webpack.png"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="/home/stack-slider/nextjs-icon.png"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="/home/stack-slider/gatsby-icon.png"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="/home/stack-slider/flutter.png"
                alt=""
              />
            </div>
            <div class="slide">
              <h2 className="text-gray-500 text-2xl font-bold">MobX</h2>
            </div>
            <div class="slide">
              <h2 className="text-gray-500 text-2xl font-bold">Zustand</h2>
            </div>
            <div class="slide">
              <h2 className="text-gray-500 text-2xl font-bold">Redux</h2>
            </div>
            <div class="slide">
              <img
                src="/home/stack-slider/tensorflow-logo.png"
                alt=""
              />
            </div>
            <div class="slide">
              <h2 className="text-gray-500 text-2xl font-bold">Sklearn</h2>
            </div>
            <div class="slide">
              <h2 className="text-gray-500 text-2xl font-bold">Express.js</h2>
            </div>
            <div class="slide">
              <img
                src="/home/stack-slider/mysql.png"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="/home/stack-slider/laravel.png"
                alt=""
              />
            </div>
            <div class="slide">
              <h2 className="text-gray-500 text-2xl font-bold">GraphQL</h2>
            </div>
            <div class="slide">
              <h2 className="text-gray-500 text-2xl font-bold">MongoDB</h2>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(calc(150px * 8));
            }
            100% {
              transform: translateX(calc(-150px * 15));
            }
          }
        `}
      </style>
      <style>
        {`

          .slider {
            height: 100px;
            margin: auto;
            overflow: hidden;
            position: relative;
            width: auto;
          }
          
          .slide-track {
            animation: scroll 30s linear infinite;
            display: flex;
            // width: calc(150px * 24);
          }
          .slide {
            width: 150px;
            height: 60%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            align-self: center;
            word-wrap: break-word;
          }
          .slide img {
            display: block;
            width: 100%;
            height: 100%;
            padding: 0 1rem;
            object-fit: contain;
            -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
            filter: grayscale(100%);
          }
          .slide img:hover {
            -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
            filter: grayscale(0%);
          }
          .slider:hover .slide-track {
            animation-play-state: paused;
          }
        `}
      </style>
    </>
  );
}

import PropTypes from "prop-types";
import LogoSlider from "./logo-slider";

const Header = ({yourname, yourRole}) => (
  <>
    <div className="h-52 md:h-[55vh] mb-6 md:mb-24 px-8 md:px-0 flex flex-col justify-end">
      <div className="inner container md:mx-auto text-left md:text-center">
      <p className="text-2xl md:text-6xl text-base-2 font-semibold font-header">
        {yourname}
      </p>
      <h1 className="title text-4xl md:leading-none md:text-[7rem] font-semibold font-header mt-4">
        {yourRole}
      </h1>
      </div>
    </div>
    <LogoSlider />
  </>
);

Header.propTypes = {
  yourname: PropTypes.string,
  yourRole: PropTypes.element,
};

Header.defaultProps = {
  yourname: "Hi, I'm Fadhel. 👋",
  yourRole: <>
  <span className="relative stabilo after:h-[1vh] after:md:h-[4vh]">Software</span> Engineer <br/>Based in Tangerang
  <style jsx>
        {`
        .stabilo {
        transition: all 0.3s ease, background-position 1ms;
        }
        .stabilo::after {
            content: "";
            width: 100%;
            transform: rotate(-2deg) skew(5deg);
            background-color: rgb(254 202 202);
            background-image: linear-gradient(to right,#f9d2af, #fdf2f8);
            position: absolute;
            right: 0;
            bottom: 18%;
            z-index: -1;
        }
        `}
    </style>
  </>,
};
export default Header;

import PropTypes from "prop-types";
import LogoSlider from "./logo-slider";

const Header = ({yourname, yourRole}) => (
  <>
    <div className="homepage-header px-8 md:px-0 flex flex-col justify-center">
      <div className="inner container mx-auto text-left">
      <p className="text-3xl text-slate-500 font-semibold font-header">
        {yourname}
      </p>
      <h1 className="title text-6xl md:text-8xl font-semibold font-header mt-4">
        {yourRole}
      </h1>
      </div>
    </div>
    <LogoSlider />
    <style jsx>
      {`
      .homepage-header {
        height: 75vh;
      }
      ::selection {
        background: rgb(251 146 60);
        color: #fff;
        text-shadow: none;
      }
      `}
    </style>
  </>
);

Header.propTypes = {
  yourname: PropTypes.string,
  yourRole: PropTypes.element,
};

Header.defaultProps = {
  yourname: "Hi, I'm Fadhel. 👋",
  yourRole: <>
  <span className="relative stabilo">Interface</span> Engineer <br/>Based in Tangerang
  <style jsx>
        {`
        .stabilo {
        transition: all 0.3s ease, background-position 1ms;
        }
        .stabilo:hover:after{
          height: 10vh;
          background-color: rgb(251 146 60);
          color: #fff;
          transition: all 0.3s ease;
      }
      .stabilo:hover{
        color: #fff;
        transition: all 0.3s ease;
    }
        .stabilo::after {
            content: "";
            width: 100%;
            height: 1vh;
            background-color: rgb(254 202 202);
            position: absolute;
            right: 0;
            bottom: 20%;
            z-index: -1;
            transition: all 0.3s ease, background-position 1ms;
        }
        `}
    </style>
  </>,
};
export default Header;

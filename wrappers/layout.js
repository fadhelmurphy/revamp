import PropTypes from "prop-types";
import Head from "next/head";

const LayoutStyle = <style jsx>{``}</style>;

const Layout = ({ TitlePage, Header, children, Footer }) => {
  return (
    <>
      <Head>
        <title>{TitlePage}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {Header && <Header />}
      <div className="container mx-auto">
      {children}
      </div>
      {Footer && <Footer />}
      {LayoutStyle}
    </>
  );
};

Layout.propTypes = {
  TitlePage: PropTypes.string,
  Header: PropTypes.any,
  children: PropTypes.element.isRequired,
  Footer: PropTypes.element.any,
};

Layout.defaultProps = {
  TitlePage: "Home | Fadhel Ijlal Falah",
  Header: null,
  children: <></>,
  Footer: null,
};

export default Layout;

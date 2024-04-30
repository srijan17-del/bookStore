import Banner from "../components/Banner";
import Footer from "../components/Footer";
import FreeBook from "../components/FreeBook";
import Navbar from "../components/Navbar";

const home = () => {
  return (
    <>
      <Navbar />
      <Banner></Banner>
      <FreeBook />
      <Footer />
    </>
  );
};

export default home;

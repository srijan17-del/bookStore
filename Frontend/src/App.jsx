import Banner from "./components/Banner";
import Footer from "./components/Footer";
import FreeBook from "./components/FreeBook";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Banner></Banner>
        <FreeBook />
        <Footer />
      </div>
    </>
  );
}

export default App;

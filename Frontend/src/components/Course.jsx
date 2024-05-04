import Footer from "./Footer";
import Navbar from "./Navbar";

import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Course = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4001/book");
        setBook(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container md:px-20 px-4">
        <div className="mt-10 flex flex-col justify-center items-center text-center">
          <h1 className="text-2xl md:text-3xl font-semibold  ">
            Welcome ,your book according to{" "}
            <span className="text-orange-400 font-mono font-bold -mt-8">
              <br />
              your choice
            </span>
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Distinctio, rem in voluptate nihil eaque consequuntur quis! Dicta
            optio impedit itaque voluptates similique accusamus temporibus
            laborum sed quaerat deserunt? Veritatis, inventore.
          </p>
          <Link to={"/"}>
            <button className="btn bg-orange-300 mt-4 btn-sm shadow-sm text-white ">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-8  grid grid-cols-1 md:grid-cols-3 ">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Course;

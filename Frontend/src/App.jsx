import Course from "./components/Course.jsx";
import Home from "./home/Home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        {/* <Home></Home>
        <Course /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

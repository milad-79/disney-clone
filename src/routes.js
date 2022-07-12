import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import MovieById from "./components/movie/Movie";

function RoutesComp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movie/:id" element={<MovieById />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesComp;

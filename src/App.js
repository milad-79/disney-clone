import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login/login";
import MovieById from "./components/movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/movie/:id" element={<MovieById/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

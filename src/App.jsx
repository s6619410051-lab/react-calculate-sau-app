import { Routes, Route } from "react-router";
import Home from "./views/Home";
import Bmi from "./views/Bmi";
import Bmr from "./views/Bmr";
import Car from "./views/Car";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bmi" element={<Bmi />} />
      <Route path="/bmr" element={<Bmr />} />
      <Route path="/car" element={<Car />} />
    </Routes>
  );
}

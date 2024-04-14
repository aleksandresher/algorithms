import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SumOfTwo from "./components/SumOfTwo";
import SumOfThree from "./components/SumPfThree";
import Reverse from "./components/Reverse";
import Factorial from "./components/Factorial";
import Palindrome from "./components/Palindrome";
import NavBar from "./components/Nav";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/two" element={<SumOfTwo />} />
        <Route path="/three" element={<SumOfThree />} />
        <Route path="/reverse" element={<Reverse />} />
        <Route path="/factorial" element={<Factorial />} />
        <Route path="/palindrome" element={<Palindrome />} />
      </Routes>
    </div>
  );
}

export default App;


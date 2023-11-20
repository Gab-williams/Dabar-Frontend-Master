import Contact from "./Contact";
import Home from "./Home";
import Story from "./Story";
import Error from "./Error.js";
import About from "./About.js";
import Team from "./Team.js";
import Category from "./Category.js";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/story" element={<Story/>} />
      <Route path="/contact us" element={<Contact/>} />
      <Route path="/about us" element={<About/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/video-category" element={<Category/>} />
      <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./App.css";
import SlideImage from "./Components/3DSlide/SlideImage";
import Teleport from "./Components/Teleport/Teleport";

function App() {
  return (
    <Router>
      <div className="App">
        <Outlet />
      </div>
      <Routes>
        <Route exact path="/" element={<SlideImage />} />
        <Route path="/teleport" element={<Teleport />} />
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "../src/components/Home/Home"
import Accidents from "./components/Accidents/Accidents"
import Analysis from "./components/Analysis/Analysis"
import Markaccidents from "../src/components/Markaccidents"

function App() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route exact path="/" element={<Home active="home"/>} />
            <Route exact path="/accidents" element={<Accidents active="accidents"/>} />
            <Route exact path="/analysis" element={<Analysis active="analysis"/>} />
            <Route exact path="/markaccidents" element={<Markaccidents active="markaccidents"/>} />               
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;

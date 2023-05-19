import './App.css';
import Navbar from "./navbar"
import Landing from "./landing"
import Assistus from './assistus';
import {BrowserRouter as Router, Route, Routes, useLocation,Link} from "react-router-dom"
import AssistWidows from './assistwidows';
import AssistLessPriviledge from './assist_underpriviledge';
import OurPlan from './ourplan';

function App() {
  return (
    <div className="App">
 <Navbar />
 <Router>
  <Routes>
    <Route path='/' element={<Landing />} />
    <Route path="our_plans" element={<OurPlan />} />
    <Route path='/how_to_assist/altruistic children' element={<Assistus />} />
    <Route path='/how_to_assist/widows' element={<AssistWidows />} />
    <Route path='/how_to_assist/under_priviledged' element={<AssistLessPriviledge />} />
  </Routes>
 </Router>
    </div>
  );
}

export default App;

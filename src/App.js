import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Events from "./Pages/Events/Events";
import Home from "./Pages/Home/Home";
import LatestNews from "./Pages/LatestNews";
import Members from "./Pages/Members/Members";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/members' element={<Members/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/news' element={<LatestNews/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

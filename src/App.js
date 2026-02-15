
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Country from './Pages/Country';
import Navbar from './Components/Navbar';
import { useState } from 'react';
function App() {

  // note: home page sy redirect krty huy navbar mai state about pr update krni hai
  // 1 ) parent pr state lgani pry ge
  // 2 ) navbar mai value pass krwani hai
  // 3 ) home pr setState bhajni hai, wahan sy hero pr bhajni hai
  // 4 ) hero mai update krwani hai state, setPage("About")
const [Page, setPage] = useState("");
  return (
    <>
      <BrowserRouter>
        <Navbar setPage ={setPage} Page={Page}/>
        <Routes>
          <Route
            path="/"
            element={<Home setPage={setPage} />}
          />
          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/Country"
            element={<Country />}
          />

          <Route
            path="/Contact"
            element={<Contact />}
          />


        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;

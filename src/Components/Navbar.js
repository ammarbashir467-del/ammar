import  { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar({Page, setPage}) {

  
  const location = useLocation();

  useEffect(() => {
    console.log("runs on navbar from all pages");
    console.log("check pathname =====>", location.pathname);

    if (location.pathname === '/') setPage('Home');
    if (location.pathname === '/about') setPage('About');
    if (location.pathname === '/Country') setPage('Country');
    if (location.pathname === '/Contact') setPage('Contact');
    
  }, [location.pathname, setPage]);

  function home() {
    setPage("Home")
  }

  function about() {
    setPage("About")
  }
  function country() {
    setPage("Country")
  }
  function contact() {
    setPage("Contact")
  }


  return (
    <>
      <nav class="navbar nav navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <Link class="navbar-brand" to="#"><b>WorldAtlas</b></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse nav-list navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class={`nav-link ${Page === "Home" && "active"}`} aria-current="page" to="/" onClick={home}>Home</Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${Page === "About" && "active"}`} to="/about" onClick={about}>About</Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${Page === "Country" && "active"}`} to="/Country" onClick={country}>Country</Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${Page === "Contact" && "active"}`} to="/Contact" onClick={contact}>Contact</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
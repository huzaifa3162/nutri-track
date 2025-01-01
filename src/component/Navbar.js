import React ,{useEffect} from 'react'
import { Link ,useLocation} from 'react-router-dom'
import "../styles/navbar.css"; 
function Navbar() {
  let location = useLocation()
  useEffect(() => {
    
    console.log(location.pathname)
  }, [location]);
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
  <div className="container-fluid">
    <Link className="navbar-brand custom-brand" to="/Home">
     {}
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto text-center">
        <li className="nav-item">
          <Link className={`nav-link fs-5 ${location.pathname === "/Home" ? "active-link" : ""}`} to="/Home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link fs-5 ${location.pathname === "/About" ? "active-link" : ""}`} to="/About">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link fs-5 ${location.pathname === "/News" ? "active-link" : ""}`} to="/News">
            News
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link fs-5 ${location.pathname === "/Ingrediatents" ? "active-link" : ""}`} to="/Ingrediatents">
            Ingrediatents
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link fs-5 ${location.pathname === "/Bmi" ? "active-link" : ""}`} to="/Bmi">
            BMI calculator
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link fs-5 ${location.pathname === "/Dietplan" ? "active-link" : ""}`} to="/Dietplan">
            Diet Plan
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link fs-5 ${location.pathname === "/Notes" ? "active-link" : ""}`} to="/Notes">
            Notes
          </Link>
        </li>
      </ul>
      <form className="d-flex">
        <Link type="button" className="btn btn-primary mx-2 custom-btn " to="/Login">Login</Link>
        <Link type="button" className="btn btn-outline-primary mx-2 custom-btn  " to="/Signup">Sign-Up </Link>
      </form>
    </div>
  </div>
</nav>


    </>
  )
}

export default Navbar

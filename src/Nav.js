import React,{useState,useEffect} from 'react'
import './Nav.css'

function Nav() {
const [show,handleShow] = useState(false)

useEffect(() => {
window.addEventListener("scroll", () => {
    if(window.scrollY > 200) {
        handleShow(true);
    } else handleShow(false)
}) ;
return () => {
    window.removeEventListener("scroll")
}
}, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
          <img className="nav__logo"
              src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=41"
              alt="Logo"
          />  
          <img className="nav__avatar"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
              alt="Logo"
          />
        </div>
    )
}

export default Nav

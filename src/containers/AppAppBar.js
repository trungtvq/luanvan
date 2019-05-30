import React from 'react';
import {Link} from 'react-router-dom';


function AppAppBar() {

  const navStyle = {
    color: 'red',
    background: "transparent !important",
    position: "absolute",
    top: "20px",
    left: 0,
    right: 0,
    zIndex: 3,
  };
  const loginStyle ={
    background: "#6c63ff",
    border:`1px solid "#6c63ff`,
    paddingTop: ".5rem",
    paddingBottom: ".5rem",
    paddingLeft: "20px",
    paddingRight: "20px",
    margin: "1px 0px 0px",

    borderRadius: "5px",
    color: "#fff",
    boxSizing: "border-box",
    opacity: 1,
    fontWeight: 400,
    display: "block",
    transition: ".3s all ease",
  }
  const signupStyle={
    background: "#ff6347",
    border:`1px solid "#6c63ff`,
    paddingTop: ".5rem",
    paddingBottom: ".5rem",
    paddingLeft: "20px",
    paddingRight: "20px",
    margin: "1px 0px 0px",

    borderRadius: "5px",
    color: "#fff",
    boxSizing: "border-box",
    opacity: 1,
    fontWeight: 400,
    display: "block",
    transition: ".3s all ease",
  }
  const liStyle={
    fontSize: "16px",
    paddingTop: ".9rem",
    paddingBottom: ".9rem",
    paddingLeft: "20px",
    paddingRight: "20px",
    color: "#000000",
    fontWeight: "400",
    opacity: "22222222 !important",
  }
  const homeStyle={
    fontSize: "16px",
    paddingTop: ".9rem",
    paddingBottom: ".9rem",
    paddingLeft: "20px",
    paddingRight: "20px",
    color: "#6c63ff",
    fontWeight: "400",
    opacity: "22222222 !important",
  }
  const menuStyle={
    display: "flex",
    flexBasis: "auto",
    alignItems: "center",
    webkitBoxFlex: 1,
    msFlexPositive: 1,
    flexGrow: 1,
    webkitBoxAlign: "center",
    boxSizing: "border-box",
    WebkitBoxDirection: "normal",
    fontSize: "16px",
    lineHeight: 1.8,
    fontWeight: "400",
    color: "#999999",
    fontFamily: `"Nunito Sans", Arial, sans-serif`,
    WebkitTapHighlightColor: `rgba(0, 0, 0, 0)`,
  }
  
  return (
    <div>
        <nav  class="navbar navbar-expand-lg  ftco_navbar  ftco-navbar-light" style={navStyle} >
	    
      <div class="container" style={menuStyle}>
        <a class="navbar-brand" href="index.html" style={{color: "#000000",fontWeight:900,fontSize: "20px",
          display: "block",
          paddingTop: "0.3125rem",
          paddingBottom: "0.3125rem",
          marginRight: "1rem",
          lineHeight: "inherit",
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          fontFamily: `"Nunito Sans", Arial, sans-serif`,
          textDecoration: "none",
      }}>Overlead</a>
	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="oi oi-menu"></span> Menu
	      </button>

	      <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav ml-auto">
	          <li  class="nav-item active"><a style={homeStyle}  href="https://overlead.co/home" class="nav-link">Home</a></li>
	          <li class="nav-item"><Link style={liStyle} to="/about" class="nav-link">About</Link></li>
	          <li class="nav-item"><Link style={liStyle} to="/privacy" class="nav-link">Privacy</Link></li>
	          <li class="nav-item"><Link style={liStyle} to="/donate" class="nav-link">Donate</Link></li>
	          <li class="nav-item"><Link style={liStyle} to="/contact" class="nav-link">Contact</Link></li>
	          <li class="nav-item cta mr-md-1" ><Link style={loginStyle} to="/login" class="nav-link">Sign In</Link></li>
	          <li  class="nav-item cta cta-colored" ><Link style={signupStyle} to="/register" class="nav-link">Sign Up</Link></li>

	        </ul>
	      </div>
	    </div>
      </nav>
      </div>
  
	 
  );
}

export default (AppAppBar);
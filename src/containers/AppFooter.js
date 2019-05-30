import React from 'react';
import PropTypes from 'prop-types';

function AppFooter(props) {
  const footerStyle={
    fontSize: `16px`,
    background: `#000000`,
    padding: `7em 0`,
    color: `#fff  `
  }
  return (
  
    
    <footer style={footerStyle} class="ftco-footer ftco-bg-dark ftco-section">
      <div class="container">
        <div class="row mb-5">
        	<div class="col-md">
             <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">About</h2>
              <p>Management tool for every one. Free for everyone, but you can donate us if you feel it can save your time.</p>
              <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate"><a href="https://www.facebook.com/Overlead-237878327133820/?modal=admin_todo_tour"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Employers</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="py-2 d-block">How it works</a></li>
                <li><a href="#" class="py-2 d-block">Recruiting Service</a></li>
                <li><a href="#" class="py-2 d-block">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4 ml-md-4">
              <h2 class="ftco-heading-2">Workers</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="py-2 d-block">How it works</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
            	<h2 class="ftco-heading-2">Have a Questions?</h2>
            	<div class="block-23 mb-3">
	              <ul>
	                <li><span class="icon icon-map-marker"></span><span class="text">268 Lý Thường Kiệt, Phường 14, Quận 10, Hồ Chí Minh, Việt Nam</span></li>
	                <li><a href="#"><span class="icon icon-phone"></span><span class="text">+84907316215</span></a></li>
	                <li><a href="#"><span class="icon icon-envelope"></span><span class="text">info@overlead.co</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>        
        
      </div>
    </footer>
  );
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (AppFooter);

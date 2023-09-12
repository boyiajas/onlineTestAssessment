import "./Footer.css";


import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';

import { Link } from '@inertiajs/react';

export default function Footer(props) {
  const { styles } = props;

  return (
    <div className="footer">
      <div className="section container">
        <div className="footer-up row">
          <div className="col-lg-3 col-md-6 footer-contact">
            <div>
                <h1>ICONIS</h1>
            </div>
            <div className="footer-contact-address">
            <i className="fa fa-map-marker text-primary-color"></i> 52 Pearson Avenue, Eshowe <br /> KwaZulu Natal <br /> 3815
            </div>

           
            <br/>
            <p>
              <i className="fa fa-phone text-primary-color"></i> +27 035 340 1061 <br/>
              <i className="fa fa-envelope-o text-primary-color"></i> info@mantkitsolutions.co.za
            </p>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4 className="white">Useful Links</h4>
            <ul>
              <li><i className="fa fa-chevron-right"></i> <Link href="/">Home</Link></li>
              <li><i className="fa fa-chevron-right"></i> <Link href="/about">About Us</Link></li>
              <li><i className="fa fa-chevron-right"></i> <Link href="/contacts">How it Works</Link></li>
              <li><i className="fa fa-chevron-right"></i> <Link href="/contacts">Contact</Link></li>
              <li><i className="fa fa-chevron-right"></i> <Link href="/contacts">FAQ</Link></li>
              <li><i className="fa fa-chevron-right"></i> <Link href="/">Terms of service</Link></li>
              <li><i className="fa fa-chevron-right"></i> <Link href="/">Privacy policy</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4 className="white">Our Services</h4>
            <ul>
              <li><i className="fa fa-chevron-right"></i> <Link href="/service/technology-services">Network Security</Link></li>
              <li><i className="fa fa-chevron-right"></i> <Link href="/service/cloud-computing">Cloud Computing</Link></li>
              <li><i className="fa fa-chevron-right"></i> <Link href="/service/digital-transformation">Digital Transformation</Link></li>
              <li><i className="fa fa-chevron-right"></i> <Link href="/service/ict-governance">ICT Governance</Link></li>
              <li><i className="fa fa-chevron-right"></i> <Link href="/service/ict-security">ICT Security</Link></li>
             
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-newsletter">
            <h4 className="white">Join Our Newsletter</h4>
            <p>Be the first to know about new product releases, upcoming events, and special promotions.</p>
            <form action="" method="post">
              <input type="email" name="email" placeholder="Your email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
        
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
            <div className="py-4 bottom-panel">
                <div className="">
                    <div className="copyright">
                        © 2023 ICONIS
                        <strong><span></span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        {/* All the links in the footer should remain intact. */}
                        {/* You can delete the links only if you purchased the pro version. */}
                        {/* Licensing information: https://bootstrapmade.com/license/ */}
                        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/flattern-multipurpose-bootstrap-template/ */}
                        Website Developed by ICONIS
                    </div>
                </div>
                <div className="social-links  pt-3 pt-md-0">
                    <a href="https://twitter.com/" className="twitter"><i className="fa fa-twitter"></i></a>
                    <a href="https://www.facebook.com/profile.php?" className="facebook"><i className="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com/" className="instagram"><i className="fa fa-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                    <a href="https://www.linkedin.com/company/" className="linkedin"><i className="fa fa-linkedin"></i></a>
                </div>
            </div>
            </div>
      </div>
    </div>
  );
}

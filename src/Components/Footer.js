import { FaFacebookSquare,FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
 const iconStyles ={
   fontSize:"1.5em",
   color:"white"

 }
const Footer = () => {
  return (
    <div>
      <section id="footer" className=" p-5 align-self-center">
        <div class="container text-light" style-={{height:'100vh'}}>
          <div class="row  ">
            <div class="col-md-3 ">
              <div class="ftco-footer-widget mb-4">
                <h5 class="ftco-heading-2 mb-5">About</h5>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul class=" d-flex  ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li class="ftco-animate px-2">
                    <a href="#">
                      <span class="icon-twitter"><FaSquareXTwitter style={iconStyles}/></span>
                    </a>
                  </li>
                  <li class="ftco-animate px-2">
                    <a href="#">
                      <span class="icon-facebook"> <FaFacebookSquare style={iconStyles} /></span>
                    </a>
                  </li>
                  <li class="ftco-animate">
                    <a href="#">
                      <span class="icon-instagram"><FaInstagram style={iconStyles} /></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md col-sm-6">
              <div class=" mb-4 ml-md-4  mx-sm-2">
                <h5 class="ftco-heading-2 mb-3">Links</h5>
                <ul class="list-unstyled">
                  <li className="py-2">
                    <a href="#" class="text-light" style={{textDecoration:'none'}}>
                      <span class="text-light"></span>Home
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" class="text-light" style={{textDecoration:'none'}}>
                      <span class="icon-long-arrow-right mr-2"></span>About
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" class="text-light" style={{textDecoration:'none'}}>
                      <span class="icon-long-arrow-right mr-2"></span>Services
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" class="text-light" style={{textDecoration:'none'}}>
                      <span class="icon-long-arrow-right mr-2"></span>Projects
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#"  className="text-light"style={{textDecoration:"none"}} >
                      <span class="icon-long-arrow-right mr-2"></span>Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md ">
              <div class="ftco-footer-widget mb-4">
                <h5 class="ftco-heading-2 mb-3">Services</h5>
                <ul class="list-unstyled">
                  <li className="py-2">
                    <a href="#"  className="text-light"style={{textDecoration:"none"}}>
                      <span class="icon-long-arrow-right mr-2"></span>Web Design
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#"  className="text-light"style={{textDecoration:"none"}}>
                      <span class="icon-long-arrow-right mr-2"></span>Web
                      Development
                    </a>
                  </li >
                  <li className="py-2">
                    <a href="#"  className="text-light"style={{textDecoration:"none"}}>
                      <span class="icon-long-arrow-right mr-2"></span>Business
                      Strategy
                    </a>
                  </li>
                  <li  className="py-2">
                    <a href="#"  className="text-light"style={{textDecoration:"none"}}>
                      <span class="icon-long-arrow-right mr-2"></span>Data
                      Analysis
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#"  className="text-light"style={{textDecoration:"none"}}>
                      <span class="icon-long-arrow-right mr-2"></span>Graphic
                      Design
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md">
              
              <div class="ftco-footer-widget mb-4">
                <h5 class="ftco-heading-2 mb-3">Have Questions?</h5>
                <ul class="list-unstyled">
                <li style={{listStyleType:"none"}}>
                      <span class="icon icon-map-marker"></span>
                      <span class="text">
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </span>
                    </li>
                    <li style={{listStyleType:"none"}}>
                      <a href="#"  className="text-light"style={{textDecoration:"none"}}>
                        <span class="icon icon-phone"></span>
                        <span class="text">+2 392 3929 210</span>
                      </a>
                    </li>
                    <li style={{listStyleType:"none"}}>
                      <a href="#" class="text-light" style={{textDecoration:'none'}}>
                        <span class="icon icon-envelope"> </span>
                        <span class="text">info@yourdomain.com</span>
                      </a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row my-5">
            <div class="col-md-12 text-center my-5">
              <p>
                Copyright &copy;2023
                 All rights reserved | This template is made with{' '}
                <i class="icon-heart color-danger" aria-hidden="true"></i> by{' '}
                <a href="https://colorlib.com" target="_blank" className="text-light" style={{textDecoration:"none"}}>
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
 export default Footer;
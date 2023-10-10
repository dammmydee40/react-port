import about from '../images/about.jpg';
import {FaMailBulk} from "react-icons/fa"
import { FaAccusoft,FaSafari,FaDribbble } from "react-icons/fa6"
const iconStyles ={
  fontSize:"2.3em",
  color:"white"

}

const Contact = () => {
  return (
    <div>
      <section class="ftco-section contact-section ftco-no-pb" id="contact">
        <div class="container p-5">
          <div class="row justify-content-center mb-5 pb-3">
            <div class="col-md-7 heading-section text-center text-light ftco-animate">
              <h1 class="big big-2">Contact</h1>
              <h2 class="mb-4">Contact Me</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>

          <div class="row d-flex contact-info text-light mb-5">
           
            <div class="col-md-6 col-lg-3 d-flex  align-items-center justify-content-center ftco-animate">
              <div class="align-self-center box p-4 text-center">
                <div class="icon d-flex align-items-center justify-content-center mb-3">
                  <span class="icon-phone2"><FaSafari style={iconStyles}/></span>
                </div>
                <h3 class="mb-4">Contact Number</h3>
                <p>
                  <a
                    href="tel://1234567920"
                    className="text-light"
                    style={{ textDecoration: 'none' }}>
                    + 1235 2355 98
                  </a>
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex   align-items-center justify-content-center ftco-animate">
              <div class="align-self-stretch box p-4 text-center">
                <div class="icon d-flex align-items-center justify-content-center mb-3">
                  <span class="icon-paper-plane"><FaMailBulk style={iconStyles}/></span>
                </div>
                <h3 class="mb-4">Email Address</h3>
                <p>
                  <a
                    href="mailto:info@yoursite.com"
                    className="text-light"
                    style={{ textDecoration: 'none' }}>
                    info@yoursite.com
                  </a>
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex  align-items-center justify-content-center ftco-animate">
              <div class="align-self-stretch box p-4 text-center">
                <div class="icon d-flex align-items-center justify-content-center mb-3">
                  <span class="icon-globe"><FaDribbble style={iconStyles}/></span>
                </div>
                <h3 class="mb-4">Website</h3>
                <p>
                  <a
                    href="#"
                    className="text-light"
                    style={{ textDecoration: 'none' }}>
                    Mickeydev.com
                  </a>
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex  align-items-center justify-content-center ftco-animate">
              <div class="align-self-stretch box p-4 text-center">
                <div class="icon d-flex align-items-center justify-content-center mb-3">
                  <span class="icon-globe"><FaAccusoft style={iconStyles}/></span>
                </div>
                <h3 class="mb-4">Address</h3>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
            </div>
          </div>

          <div >
            <div class="">
              <div className="bg-gray  p-4 mx-auto" style={{ width: '80%',backgroundColor:"rgb(248,249,250)" }}>
                <form className='my-3'>
                  <div class="mb-2">
                    
                    <input
                      type="text"
                      class="form-control"
                    
                      aria-describedby="emailHelp"
                      placeholder='Your Name'
                    />
                  </div>
                  <div class="mb-3">
                   
                    <input
                      type="password"
                      class="form-control"
                
                      placeholder='your Email'
                    />
                  </div>
                  <div class="mb-3">
                    
                    <input
                      type="text"
                      class="form-control"
                    
                      placeholder='subject'
                    />
                  </div>
                  <div class="mb-3">
                    
                    <textarea
                      class="form-control"
                      placeholder='Your Message'
                      rows="4"
                     
                      ></textarea>
                  </div>
                  <div class="d-grid gap-2 col-6 mx-auto my-5">
                    <button
                      class="btn btn-warning"
                      style={{ borderRadius: '30px' }}
                      type="button">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;

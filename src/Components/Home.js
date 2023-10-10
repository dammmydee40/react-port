import hero from '../images/bg_1.png';
import aboutpic from '../images/bg_2.png';
import Navbar from './Navbar';
import Services from './Services';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contacts';
import Footer from "./Footer";
import Resume from "./Resume"
import About from "./About"

import { FcIdea, FcGlobe, FcDeployment } from 'react-icons/fc';


const Home = () => {
  return (
    <div >
  

      {/* home */}
      <section id="home" className="  text-light text-center p-5">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div className="my-32 py-8">
              <h5 className="text-warning"> HELLO!!</h5>
              <h1 class="mb-4 mt-3">
                I'm <span className="text-warning">Micheal Fredrick</span>
              </h1>
              <h2 class="mb-4">A Freelance Web Designer</h2>
              <p>
                <a
                  href="#"
                  class="btn btn-warning py-2 px-3 "
                  style={{ borderRadius: '30px' }}>
                  Hire me
                </a>{' '}
                <a
                  href="#"
                  class="btn btn-white btn-outline-light py-2 px-3"
                  style={{ borderRadius: '30px' }}>
                  My works
                </a>
              </p>
            </div>
            <img
              src={aboutpic}
              className="w-50"
              style={{ width: '50%', height: '40%' }}
              alt=""
            />
          </div>
        </div>
      </section>
      {/* about */}
      
      {/* <About/>
   
      <Resume/> */}
      {/* services */}
      {/* <Services/> */}
      {/* skills */}
      
        {/* <Skills/>
      
      
        <Projects/>
      
      <Contact/>
      <Footer/> */}
    </div>
  );
};

export default Home;

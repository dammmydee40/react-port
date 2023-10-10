import hero from '../images/bg_1.png';

const About = () => {
  return (
    <div>
      <section id="about" className="p-5">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <img
              src={hero}
              className="d-none d-sm-block w-50"
              style={{ width: '50%', height: '40%' }}
              alt=""
            />
            <div className="text-light text-center text-sm-start">
              <h1 class="big">About</h1>
              <h2 class="mb-4">About Me</h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <ul class="about-info mt-4 px-md-0 px-2">
                <li class="d-flex">
                  <span>Name:</span> <span>Clark Thompson</span>
                </li>
                <li class="d-flex">
                  <span>Date of birth:</span> <span>January 01, 1987</span>
                </li>
                <li class="d-flex">
                  <span>Address:</span> <span>San Francisco CA 97987 USA</span>
                </li>
                <li class="d-flex">
                  <span>Zip code:</span> <span>1000</span>
                </li>
                <li class="d-flex">
                  <span>Email:</span> <span>clarkthomp@gmail.com</span>
                </li>
                <li class="d-flex">
                  <span>Phone: </span> <span>+1-2234-5678-9-0</span>
                </li>
              </ul>
              <div class="counter-wrap ftco-animate d-flex mt-md-3">
                <div class="text">
                  <p class="mb-4">120 Project complete</p>
                  <p>
                    <a href="#" class="btn btn-warning py-2 px-2">
                      Download CV
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;

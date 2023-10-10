const Resume = () => {
  return (
    <div>
      <section id="resume" className="p-5">
        <div class="container mx-auto">
          <div className="text-center text-light mt-5">
            <h1 class="big big-2">Resume</h1>
            <h2 class="mb-4">Resume</h2>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
          <div class="row ">
            <div class="col-md-6">
              <div
                class=" card p-3 mb-4 text-light"
                style={{ backgroundColor: 'rgb(26,26,26)' }}>
                <span class="date text-warning">2022-2023</span>
                <h2 className="text-light">Web Development</h2>
                <span class="position">Codar institute</span>
                <p class="mt-4 ">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
              <div
                class=" card  mb-4 p-3"
                style={{ backgroundColor: 'rgb(26,26,26)' }}>
                <span class="text-warning">2013-2018</span>
                <h2 className="text-light">BTech(Q.Surveyor) </h2>
                <span class="text-light">Fed Univ. Of Tech,Akure</span>
                <p class="mt-4 text-light">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
              <div
                class=" card mb-4 p-3 text-light"
                style={{ backgroundColor: 'rgb(26,26,26)' }}>
                <span class=" text-warning">2011-2013</span>
                <h2 className="text-light">Diploma in Electrical </h2>
                <span class="position"></span>
                <p class="mt-4">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </div>

            <div class="col-md-6">
              <div
                class="card mb-4 p-3 text-light"
                style={{ backgroundColor: 'rgb(26,26,26)' }}>
                <span class="text-warning">2022-present</span>
                <h2 className="text-light">Electrical Engineer</h2>
                <span class="position">Alao Farms</span>
                <p class="mt-4">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
              <div
                class="card mb-4 p-3 text-light "
                style={{ backgroundColor: 'rgb(26,26,26)' }}>
                <span class="text-warning">2017-</span>
                <h2 className="text-light">Field Engineer</h2>
                <span class="position">Fobat Engineering Services</span>
                <p class="mt-4">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
              <div
                class="card mb-4 p-3 text-light"
                style={{ backgroundColor: 'rgb(26,26,26)' }}>
                <span class="text-warning">2023-</span>
                <h2 className="text-light">UI/UX Designer trainee</h2>
                <span class="position">Udemy</span>
                <p class="mt-4">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-5">
            <div class="col-md-6 text-center ftco-animate">
              <p>
                <a
                  href="#"
                  class="btn btn-warning py-3 px-5"
                  style={{ borderRadius: '30px' }}>
                  Download CV
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Resume;

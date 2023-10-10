import "../App.css"


const Navbar = () => {
  return (
    <div class="header " style={{backgroundColor:'rgb(0,0,0)'}}>
      <div className="container ">
        <nav class="navbar navbar-dark navbar-expand-lg ">
          <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">
              <span class="text-warning">Mickey</span>Dev
            </a>
            <button
              class="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation" >
              <span class="navbar-toggler-icon text-white"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a
                    class="nav-link active text-white"
                    aria-current="page"
                    href="#home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white " href="#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#resume">
                    Resume
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white " href="#services">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white " href="#skills">
                    Skills
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#projects">
                    Projects
                  </a>
                </li>
      
                <li class="nav-item">
                  <a class="nav-link text-white " href="#contact">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

import { FcIdea, FcGlobe, FcDeployment } from 'react-icons/fc';
import { FaCloudflare,FaDeezer} from "react-icons/fa"

let iconStyles = { color: 'rgb(245,182,56)', fontSize: "2em" };
const Services =()=>{
    return(
        <div>
     <section id="services" className="p-5">
        <div className="container">
          <div className="text-center text-light">
            <h1 class="big big-2">Services</h1>
            <h2 class="mb-4">Services</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
          <div className="row p-3 g-3">
            
              <div class="col-md-4  col-sm-6  text-center ">
                <div class="card p-3 bg-warning" style={{ height:"150px"}}>
                  <a href="#" class="" style={{textDecoration:"none"}}>
                   <FcGlobe style={iconStyles}/>
                    <div class="desc text-center text-dark">
                      <h6 class="mb-5 text-dark">Web Design</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-4   col-sm-6 text-center   ">
                <div class="card p-3 bg-warning" style={{height:"150px"}}>
                  <a href="#" class="services-1 text-dark" style={{textDecoration:"none"}}>
                   <FcDeployment style={iconStyles}/>
                    <div class=" text-center text-dark">
                      <h6 class="mb-5">Web Development</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-4  col-sm-6 text-center   ">
                <div class="card p-3 bg-warning" style={{height:"150px"}}>
                  <a href="#" class="services-1" style={{textDecoration:"none"}}>
                   <FcIdea style={iconStyles}/>
                    <div class="desc text-center">
                      <h6 class="mb-5  text-dark text-decoration-none">App Development</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-4  col-sm-6 text-center   ">
                <div class="card p-3 bg-warning" style={{height:"150px"}}>
                  <a href="#" class="services-1" style={{textDecoration:"none"}}>
                   <FaCloudflare style={iconStyles}/>
                    <div class="desc text-center">
                      <h6 class="mb-5  text-dark text-decoration-none">Devops</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-4   col-sm-6 text-center   ">
                <div class="card p-3 bg-warning" style={{height:"150px"}}>
                  <a href="#" class="services-1" style={{textDecoration:"none"}}>
                   <FcIdea style={iconStyles}/>
                    <div class="desc text-center">
                      <h6 class="mb-5  text-dark text-decoration-none">Ui/Ux design</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-4  col-sm-6 text-center   " id="service">
                <div class="card p-3 bg-warning" style={{height:"150px"}}>
                  <a href="#" class="services-1" style={{textDecoration:"none"}}>
                   <FaDeezer style={iconStyles}/>
                    <div class="desc text-center">
                      <h6 class="mb-5  text-dark text-decoration-none">Data Analysis</h6>
                    </div>
                  </a>
                </div>
              </div>

          </div>
        </div>
      </section>
        </div>

    )
}
 export default Services;
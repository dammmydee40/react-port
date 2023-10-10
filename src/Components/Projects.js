import project1 from '../images/project-1.jpg';
import project2 from '../images/project-2.jpg';
import project3 from '../images/project-3.jpg';
import project4 from '../images/project-4.jpg';
import project5 from '../images/project-5.jpg';
import project6 from '../images/project-6.jpg';

const project = [project1, project2, project3, project4, project5, project6];

const Projects = () => {
  return (
    <section id='projects'>
      <div className="container p-5">
        <div class="text-center text-light">
          <h2> Our Projects</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
        <div class="row g-3">
          {project.map((projects) => {
            return (
              <div className="col-md-4">
                ''
                <div
                  className="card"
                  style={{ border: 'none', outline: 'none' }}>
                  <img src={projects} alt="" style={{ height: '300px' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section> 
  );
};
export default Projects;

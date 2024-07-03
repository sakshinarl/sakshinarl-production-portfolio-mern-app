import React from "react";
import "./Project.css";
import Spin from "react-reveal/Spin";
const Project = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        Our project, a tourist guide application with hotel ordering functionality, 
        leverages the MERN stack for robust development. It integrates MongoDB for database management, 
        Express.js for backend API development, React.js for a dynamic user interface, 
        and Node.js for server-side logic. Key features include personalized tourist recommendations, seamless hotel booking, 
        and real-time updates. This project aims to enhance travel experiences by providing comprehensive guides 
        and convenient booking options in a single platform
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://www.eventya.net/wp-content/uploads/2020/09/5-reasons-travel-app-2.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Tourist Guide Website
                    </h6>
                  </div>
                 <a
                    className="ad-btn"
                    href="https://github.com/sakshinarl/tourist-guide-client"
                  >
                    View 👁
                  </a> 
                  <a
                    className="ad-btn"
                    href=" https://triptastic-pune.netlify.app/"
                  >
                    Demo ↗
                  </a> 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mern stack</span>
                  <img
                    src="https://cms.menutiger.com/wp-content/uploads/2023/03/What-is-contactless-dining-copy.jpg"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Hotel Orders Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/sakshinarl/hotel-order-client"
                  >
                    View 👁
                  </a>
                  <a
                    className="ad-btn"
                    href="https://hotel-order.netlify.app/"
                  >
                    Demo ↗
                  </a>  
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mobile App</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR356D-1YtSagN4-_ZdjZ5H9o6PKUO4h12dvw&usqp=CAU"
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React Native</span>

                  <span className="card-detail-badge">IOS / ANDROID</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Techinfoyt Coding App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View 👁
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Project;
import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img img-fluid">
              <img
                src="https://www.shutterstock.com/image-photo/digital-technology-software-development-concept-600nw-2111828198.jpg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                🙋‍♀️Hi there, I'm Sakshi Narlawar, a passionate and driven web
                development enthusiast with a knack for crafting elegant and
                responsive web interfaces. <br/><br/> <b>My expertise lies in:</b> <span style={{color:'red'}}>Front-End
                Development:</span> 
                <br/>
                HTML<br/>
                CSS<br/>
                Bootstrap<br/>
                JavaScript<br/>
                React.js <br/>
                React Native<br/>
                Redux for state management <br/>
                <span color="orange">Back-End Development: Node.js MongoDB</span><br/>

                for efficient data storage 🌟 What Sets Me Apart:<br/> <span style={{color:'red'}}>Continuous
                Learner:</span> I thrive on keeping up with the latest trends in web
                development, ensuring that I bring fresh perspectives and
                innovative solutions to every project.<br/> <span style={{color:'red'}}>Team Player:</span> I strongly
                believe in the power of collaboration and enjoy working with
                diverse teams to create impactful projects. <br/>
                <span style={{color:'red'}}>Problem Solver:</span> I
                love tackling challenges and finding creative solutions, whether
                it's optimizing code for performance or brainstorming new
                features. 🚀 Open to Exciting Opportunities!
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;

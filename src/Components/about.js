import React from "react";

function About() {
    return (
        <div>
            <main id="swup" className="transition-fade">
                <section className='about-me-section'>
                    <h2>About Me</h2>
                    <p>Hi! I'm Bradley laubscher and am a self taught developer, persuing a career within the field of software development. I am in the process of completing an online course through the CodeCademy website, which is teaching me how to make use of various tools and coding languages so that I am well equiped to enter the field.</p>
                    <p>I thoroughly enjoy solving problems and working on challenging tasks and the satisfaction I recieve from the completion of those tasks is highly motivational and fulfilling.</p>
                    <p>In my free time I enjoy engaging in outdoor acticities such as surfing and rock climbing when the weather allows for it, and when it does not, I enjoy relaxing with friends, playing games or watching movies.</p>
                        <h2 id='skills'>Skills</h2>
                        <div className='skills-list'>
                            <i className="fab fa-html5" title='Html'></i>
                            <i className="fab fa-css3-alt" title='CSS'></i>
                            <i className="fab fa-js" title='JavaScript'></i>
                            <i className="fab fa-react" title='React'></i>
                            <i><img src='../Resources/redux_icon.png' alt='redux icon' title='Redux'/></i>
                            <i className="fab fa-git" title='Git'></i>
                            <i className="fab fa-github" title='GitHub'></i>
                            <i className="fab fa-chrome" title='Chrome'></i>
                            <i className="fas fa-terminal" title='Terminal'></i>
                        </div>
                </section>
            </main>
        </div>
    )
  };

export default About;
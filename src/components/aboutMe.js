/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import ResumeViewer from "./resume";

class AboutMe extends React.Component{
  state = {
    isClose: true,
    isButton: false,
  }

  openResumeModal = () => {
    this.setState({ 
        isClose: !this.state.isClose,
        isButton: !this.state.isButton
    });
  }

  gotoLinkedProfile = () => {
    window.open(
        "https://www.linkedin.com/in/cao-trong-le/",
        "_blank"
    )
  }

  gotoGithubProfile = () => {
    window.open(
        "https://github.com/cao-trong-le/",
        "_blank"
    )
  }

  componentDidMount() {
    
  }

  render() {
    return(
      <AboutMeSection className="main-section">
        {(() => {
            return this.state.isClose ? <div></div> :  <ResumeViewer />
        })()}

        {(() => {
            return this.state.isButton ? <div 
                className="close-btn" 
                onClick={this.openResumeModal}>X</div> : <div></div>
        })()}

        <div className="upper-section">
            <div className="infor-section">
                <div className="inner-infor-wrapper">
                    <div className="avatar">
                        <img className="my-avatar" src="my_avatar.jpeg" alt="my-avatar" />
                    </div>

                    <div className="inner-infor-section">
                        <i class="fab fa-pinterest-p"></i>
                        <h2>What I Do</h2>
                        <hr />
                        <p> I have built and developed websites and apps with primary focus on Django and React</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="lower-section">
            <div className="more-about-me">
                <div className="left-side">
                    <h2>About Me</h2>
                    <hr />
                    <p>
                        I'm Cao Le. A detail-oriented websites and apps developer with primary focus on Django and React. 
                    </p>

                    <p>
                        I've built, developed and designed websites for my personal projects and freelance projects with commonly-used development tools. 
                    </p>

                    <p>
                        Currently, I'm still looking for a web or app development job. I would love to hear from you whether it's about a project or job opportunity, or just a chat. Feel free to contact me.
                    </p>
                </div>

                <div className="right-side">
                    <h2>Find Me</h2>
                    <hr />
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "5px"
                    }}>

                        
                        <p><i className="far fa-star"></i> Find more about me on Linkedin and Github</p>
                        <span
                            className="view-linkedln-profile" 
                            onClick={this.gotoLinkedProfile}>

                            <i class="fab fa-linkedin"></i>
                            <p>www.linkedin.com/in/cao-trong-le/</p>
                        </span>

                        <span 
                            className="view-github-profile" 
                            onClick={this.gotoGithubProfile}>
                            
                            <i class="fab fa-github"></i>
                            <p>github.com/cao-trong-le/</p>
                        </span>

                
                        <p 
                            style={{ 
                                marginTop: "25px",
                                marginBottom: "5px" 
                            }}>
                            <i className="far fa-star"></i> Check out my resume for more information 
                        </p>

                        <span 
                            className="view-resume" 
                            onClick={this.openResumeModal}>
                                <i class="far fa-file"></i>
                                <p>My resume</p>
                        </span>
                    </div>
                </div>

            
            </div>

            <div className="skills">
                <h2>Top Expertise</h2>
                <hr />
                <p 
                    style={{
                        marginTop: "10px",
                        marginBottom: "0px",
                        marginBlockEnd: "0px",
                        marginBlockStart: "0px",
                    }}>
                        Fullstack web developer with primary focus on Django and React
                </p>
                
                <div className="technical-skills">
                    <nav>
                        <i class="fab fa-pinterest-p"></i>
                        <ul>
                            <li>
                                <i class="far fa-star"></i>
                                <p>Python Programing</p>
                            </li>
                            <li>
                                <i class="far fa-star"></i>
                                <p>Django, Flask</p>
                            </li>
                            <li>
                                <i class="far fa-star"></i>
                                <p>Javascript</p>
                            </li>
                            <li>
                                <i class="far fa-star"></i>
                                <p>React</p>
                            </li>
                            <li>
                                <i class="far fa-star"></i>
                                <p>MySQL, PostgreSQL, MongoDB, Redis</p>
                            </li>
                        </ul>
                    </nav>

                    <nav>
                        <i class="fab fa-pinterest-p"></i>
                        <ul>
                            <li>
                                <i class="far fa-star"></i>
                                <p>Git Version Control</p>
                            </li>
                            <li>
                                <i class="far fa-star"></i>
                                <p>HTML5 / CSS3</p>
                            </li>
                            <li>
                                <i class="far fa-star"></i>
                                <p>AWS</p>
                            </li>
                            <li>
                                <i class="far fa-star"></i>
                                <p>Heroku</p>
                            </li>
                            <li>
                                <i class="far fa-star"></i>
                                <p>Google Maps API</p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
       

      </AboutMeSection>
    )
  }
}

const AboutMeSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(38,38,38);

    div.close-btn {
        top: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        right: 10px;
        height: 30px;
        width: 30px;
        outline: white solid 2px;
        color: white;
        background-color: rgb(38, 38, 38);
        border: none;
        transition: background-color 0.5s;
        z-index: 1;

        &:hover {
            color: black;
            font-weight: 600;
            cursor: pointer;
            background-color: whitesmoke;
        }
    }

    div.upper-section {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: 30px;
        justify-content: center;
        align-items: center;

        @media only screen and (max-width: 768px) {
            width: 100%;
        }

        div.infor-section {
            display: flex;
            justify-content: flex-end;
            width: 450px;
            height: 250px;

            div.inner-infor-wrapper {
                display: flex;
                justify-content: flex-end;
                width: 100%;
                height: 130px;
                margin-top: 70px;
                background-color: transparent;
                box-shadow: 0 0 0 2px whitesmoke;
                border-radius: 5px;
                color: whitesmoke;

                div.avatar {
                    height: 200px;
                    width: 200px;
                    background-color: transparent;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 7px 7px 10px grey;
                    position: absolute;
                    left: 10px;
                    top: -55px;
                    
                    img.my-avatar {
                        height: 100%;
                        width: 100%;
                        border-radius: 5px;
                    }
                }
                            
                div.inner-infor-section {
                    background-color: transparent;
                    color: black;
                    width: 50%;
                    height: 100px;
                    display: flex;
                    justify-content: center;
                    /* align-items: center; */
                    flex-direction: column;
                    padding: 5px;
                    border-radius: 5px;
                    color: whitesmoke;
                    margin-top: 5px;

                    h2 {
                        margin-bottom: 5px;
                    }

                    hr {
                        width: 100%;
                        background-color: whitesmoke;
                        margin-bottom: 10px;
                    }

                    i {
                        font-size: 25px;
                        position: absolute;
                        top: 5px;
                        right: 5px;
                        transform: rotate(20deg);
                    }
                }

            }
            
            @media only screen and (max-width: 768px) {
                margin-left: 0px;
            }
        }
    }

    div.lower-section {
        width: 85%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media only screen and (max-width: 768px) {
            width: 100%;
        }

        div.more-about-me {
            padding: 20px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            /* align-items: center; */
            
            div.left-side {
                width: 45%;
                height: auto;
                transition: all 0.5s;

                hr {
                    width: 100%;
                    background-color: whitesmoke;
                    margin-bottom: 15px;
                }

                p {
                    margin-top: 5px;
                    margin-bottom: 10px;
                }

                @media only screen and (max-width: 768px) {
                    margin-left: 0px;
                    margin-top: 25px;
                    width: 100%;
                }
            }

            div.right-side {
                width: 45%;
                padding-left: 20px;
                transition: all 0.5s;

                hr {
                    width: 100%;
                    background-color: whitesmoke;
                    margin-bottom: 15px;
                }

                span.view-resume,
                span.view-github-profile,
                span.view-linkedln-profile {
                    background-image: linear-gradient(360deg, #cfcfcf 10%, #fcfcfc 55%);
                    background-repeat: no-repeat;
                    background-size: 100% 1px;
                    background-position: 0% 100%;
                    transition: background-size 0.5s;
                    width: fit-content;
                    font-size: 16px;
                    cursor: pointer;
                    font-weight: 900;
                    margin-top: 10px;
                    display: flex;
                    align-items: center;
                    padding: 3px;
                    border-radius: 5px;

                    i {
                        font-size: 25px;
                        margin-right: 10px;
                    }
                    
                    &:hover {
                        color: black;
                        background-size: 100% 100%;
                    }
                }

                @media only screen and (max-width: 768px) {
                    padding-left: 0px;
                    margin-top: 25px;
                    width: 100%;
                }
            }

            @media only screen and (max-width: 768px) {
                flex-direction: column;
            }
        }

        div.skills {
            padding: 20px;
            width: 90%;
            display: flex;
            flex-direction: column;

            @media only screen and (max-width: 768px) {
                width: 100%;
            }

            hr {
                width: 100%;
                background-color: whitesmoke;
                margin-bottom: 10px;
            }

            span {
                background-image: linear-gradient(360deg, #cfcfcf 10%, #fcfcfc 55%);
                background-repeat: no-repeat;
                background-size: 100% 1px;
                background-position: 0% 100%;
                transition: background-size 0.5s;
                font-size: 19px;
                font-weight: 900;
                cursor: pointer;
                
                &:hover {
                    background-size: 100% 100%;
                    color: black;
                }
            }

            div.technical-skills {
                display: flex;
                margin-top: 35px;
                margin-bottom: 20px;
                /* align-items: center; */
                justify-content: left;
                width: 100%;
                color: whitesmoke;

                @media only screen and (max-width: 1024px) {
                    flex-direction: column;
                }
            
                nav {
                    background-color: transparent;
                    width: 50%;
                    padding: 20px 10px 10px 10px;
                    position: relative;
                    border-radius: 5px;
                    box-shadow: 0 0 0 2px whitesmoke;

                    i.fa-pinterest-p {
                        font-size: 35px;
                        position: absolute;
                        right: 5px;
                        top: 5px;
                        transform: rotate(30deg)
                    }
 
                    @media only screen and (max-width: 1024px) {
                        width: 100%;
                        margin-bottom: 20px;
                    }
                }

                nav:nth-child(2) {
                    margin-left: 15px;

                    @media only screen and (max-width: 1024px) {
                        margin-left: 0px;
                    }
                }

                ul {
                    list-style: none;
                    color: whitesmoke;

                    li {
                        max-height: 50px;
                        font-weight: 600;
                        font-size: 20px;
                        margin-bottom: 3px;
                        display: flex;
                        justify-content: left;
                        align-items: center;

                        i.fa-star {
                            font-size: 20px;
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
    }
`;



export default AboutMe;
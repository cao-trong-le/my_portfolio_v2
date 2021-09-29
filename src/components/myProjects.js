/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

class MyProjects extends React.Component{
  state = {

  }

  gotoProject = (e) => {
    window.open(
      e.target.getAttribute("data-project-url"),
      "_blank"
    )
  }

  render() {
    return(
      <ProjectSection className="main-section">
          <h1>My Projects</h1>
          <div className="my-projects">
              <div>
                  <img className="e-commerce-website" src="pizza_order_website.jpg" alt="error" />
                  <b className="project-name">Pizza Order Website</b>
                  <p className="project-description">
                    Clients can view, pick and customize pizza as the way they want. The website allows customers to stack orders in the cart and pay online using bank cards or paypal
                  </p>
                  <button 
                    data-project-url="https://github.com/cao-trong-le/pizza_app.git"
                    onClick={this.gotoProject}>
                    Read More &gt;&gt;
                  </button>
              </div>
                 
              <div>
                <img className="real-time-chat" src="real_time_chat.png" alt="error" />
                <b className="project-name">Real Time Chat App</b>
                <p className="project-description">Real time chat app with many useful functions like modern social media website like facebook, zalo, linkedln. Users can create chatroom and invite others to form group chats </p>
                 <button 
                    data-project-url="https://github.com/cao-trong-le/rt_chat_app.git"
                    onClick={this.gotoProject}>
                    Read More &gt;&gt;
                  </button>
              </div>

              {/* <div>
                <img className="weather-forecast-app" src="weather_forecast_website.jpg" alt="error" />
                <b className="project-name">Weather Forecast App</b>
                <p className="project-description">
                  A dynamic event setting app built by using Django and React allows users to view weather of a certain date and set events on that date. With help from tasks scheduling package like Apschedule, for each event, server will send notification messages to users' email boxes at exactly the time set in the event. 
                </p>

                <button 
                    data-project-url="https://github.com/cao-trong-le/weather_event_app.git"
                    onClick={this.gotoProject}>
                  Read More &gt;&gt;
                </button>
              </div> */}
          </div>
      </ProjectSection>
    )
  }
}

const ProjectSection = styled.div`
  background-color: rgb(38, 38, 38);
  /* padding: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: white;
    margin-top: 20px;
  }

  div.my-projects {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    width: 100%;
    justify-content: center;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      width: 100%;
    }

    img {
      height: 250px;
      width: 100%;
      border-radius: 5px;
      margin-bottom: 10px;
    }

    button {
      background-image: linear-gradient(360deg, white 10%, white 55%);
      background-repeat: no-repeat;
      background-size: 0 100%;
      background-position: 0% 100%;
      transition: background-size 0.5s;
      border: 2px solid white;
      width: 100px;
      height: fit-content;
      background-color: transparent;
      outline: none;
      border: none;
      color: white;
      font-weight: 600;
      text-decoration: none;

      &:hover {
        color: black;
        background-size: 100% 100%;
      }
    }

    div {
      width: 280px;
      margin: 10px;
      padding: 15px;
      background-color: transparent;
      border-radius: 5px;
      color: whitesmoke;
      box-shadow: 0 0 0 2px whitesmoke;

      @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        width: 90%;
        margin-bottom: 20px;
      }

      b.project-name {
        font-size: 20px;
      }

      p.project-description {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 16px;
        overflow-y: auto;
        max-height: 150px;
        border-top: 3px solid whitesmoke;
        padding-top: 3px;
        padding-right: 3px;

        &::-webkit-scrollbar {
          width: 3px;
        }

        &::-webkit-scrollbar-thumb {
          background-color: gray;
          border-radius: 50px;
        }

        &::-webkit-scrollbar-track {
          background-color: transparent;
        }
      }
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default MyProjects;
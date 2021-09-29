/* eslint-disable no-unused-vars */
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import React from "react";
import styled from "styled-components";
// import {defaultLayoutPlugin} from "@react-pdf-viewer/default-layout";

/* Component */
import {AboutMe, MyProjects, Contact, ResumeViewer} from "./components"

class App extends React.Component {
  state = {
    closeResumeModal: false
  }

  componentDidMount() {
    const getText = document.querySelector(".introduction");
    const textArray = getText.textContent.split("");
    console.log(textArray);
    getText.textContent = "";

    for(var i = 0; i < textArray.length; i++) {
      var newCharSpan = `<span class="char">${textArray[i]}</span>`;

      if(textArray[i] === " ") {
        newCharSpan = `<span class="char" style="width: 5px">${textArray[i]}</span>`;
      } 

      getText.innerHTML += newCharSpan;
      // getText.insertAdjacentHTML("beforeend", newCharSpan);
    }

    const spanElements = getText.querySelectorAll("span");
    // console.log(spanElements[0].setAttribute("class", "char fade-in"));
    var limit = spanElements.length;
    var charIndex = 0;

    const addFadeIn = setInterval(addFadeInEvent, 50)

    function addFadeInEvent () {
      spanElements[charIndex].setAttribute("class", "char fade-in");
      charIndex += 1

      if (charIndex === limit) {
        clearInterval(addFadeIn);
      }
    }
  }

  render() {
    return(
      <MainBody className="App">
        <h1 className="introduction">Hi, I'm Cao Le</h1>
        <AboutMe />
        <MyProjects />
        <Contact />
      </MainBody>
    )
  }
}

const  MainBody = styled.div`
  padding: 10px;
  margin: 0;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: whitesmoke;

  p {
    font-size: 16px;
  }

  h1.introduction {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      opacity: 0;
      color: white;
      font-size: 35px;
      font-family: cursive;
      width: fit-content;
      transform: rotate(30deg);
      transition: opacity 4s, transform 2s, color 3s;
    }

    span.fade-in {
      opacity: 1;
      color: black;
      transform: rotate(0deg);
    }
  }

  div.main-section {
    width: 80%;
  
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

export default App;

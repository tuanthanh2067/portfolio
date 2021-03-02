import React, { useContext } from "react";
import styled from "styled-components";

import { PageContext } from "../../context/PageContext";

import Window from "../Window/Window";

const DetailedProject = () => {
  const { clickedProject, setClickedProject } = useContext(PageContext);

  return (
    <StyledDetailedProject>
      <StyledLeft>
        <Window
          title={clickedProject.title}
          image={clickedProject.full}
          width="80%"
          height="70%"
        />
      </StyledLeft>
      <StyledLine></StyledLine>
      <StyledRight>
        <h1>{clickedProject.title}</h1>
        <div>
          <h2>About:</h2>
          <p>{clickedProject.details}</p>
        </div>
        <div>
          <h2>Technologies used:</h2>
          <div>
            {clickedProject.technologies.map((tech) => (
              <img src={tech} alt="tech"></img>
            ))}
          </div>
        </div>
        <StyledRedirect>
          <a href={clickedProject.website}>Visit the website</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        </StyledRedirect>
        <StyledRedirect>
          <a href={clickedProject.source}>Source code</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        </StyledRedirect>
      </StyledRight>

      <StyledGoBack onClick={() => setClickedProject(null)}>
        Go back
      </StyledGoBack>
    </StyledDetailedProject>
  );
};

const StyledDetailedProject = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background: #18191a;
  display: flex;
  border-radius: 20px;
`;

const StyledLine = styled.div`
  width: 1px;
  background: #2f3133;
  height: 80%;
  margin: auto;
`;

const StyledLeft = styled.div`
  flex: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledRight = styled.div`
  flex: 10;
  color: white;
  width: 100%;
  padding: 2em;
  h1 {
    text-align: center;
    margin-bottom: 1em;
  }
  div {
    margin-bottom: 2em;
  }
`;

const StyledRedirect = styled.div`
  display: flex;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
  }

  svg {
    fill: white;
    width: 18px;
    height: 18px;
  }
`;

const StyledGoBack = styled.div`
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  color: white;
`;

export default DetailedProject;

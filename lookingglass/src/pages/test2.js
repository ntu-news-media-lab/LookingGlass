import React from 'react';
import styled from 'styled-components';
import { BsFillBrightnessHighFill } from "react-icons/bs";

export const Styling = styled.div`
  .success {
    animation: hide-animation 0.6s ease-in 0s;
    visibility: hidden;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100000;

    .ok-icon {
      font-size: 50px;
      cursor: default;
      opacity: 0.9;
      position: absolute;
      top: 48%;
      left: 48%;
      color: green;
      margin: 0 auto;
    }

    @keyframes hide-animation {
      0% {
        opacity: 1;
        visibility: visible;
      }

      100% {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
`;

const SuccessDisplay = () => (
  <Styling>
    <div className="success">
      <BsFillBrightnessHighFill />
    </div>
  </Styling>
);

export default SuccessDisplay;
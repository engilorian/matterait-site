"use client";

import React from "react";
import styled, { keyframes } from "styled-components";


interface LoadProps {
  variant?: "light" | "dark";
}

const Load: React.FC<LoadProps> = ({ variant = "light" }) => {
  return (
    <Container role="status" aria-live="polite">
      <Loader variant={variant} aria-label="Loading" />
    </Container>
  );
};

export default Load;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;

  &::before {
    content: "";
    display: block;
    height: 100%;
  }
`;

const Loader = styled.div<{ variant: "light" | "dark" }>`
  width: 48px;
  height: 48px;
  border: 3px solid ${props => (props.variant === "light" ? "#BDE0FE" : "#008DD5")};
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;

  &::after {
    content: "";  
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    background: ${props => (props.variant === "light" ? "#008DD5" : "#BDE0FE")};
    width: 16px;
    height: 16px;
    transform: translate(-50%, 50%);
    border-radius: 50%;
  }
`;

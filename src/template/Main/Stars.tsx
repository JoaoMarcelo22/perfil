"use client"

import React, { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

const twinkle = keyframes`
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
`;

const Star = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  animation: ${twinkle} 2s infinite;
`;

const createStars = (numStars: number) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const style = {
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      animationDelay: `${Math.random() * 2}s`,
      animationDuration: `${1 + Math.random() * 2}s`
    };
    stars.push(<Star key={i} style={style} />);
  }
  return stars;
};

const ContentWrapper = styled.div`
  position: relative;
  z-index: auto;
  width: 100%;
  height: 100%;
`;

interface StarsProps {
  children: ReactNode;
}

const Stars: React.FC<StarsProps> = ({ children }) => {
  return (
    <>
      {createStars(500)}
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};

export default Stars;


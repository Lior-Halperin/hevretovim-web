import styled, { keyframes } from "styled-components";

interface StyledPropsI {
  directionSlide: "left" | "right";
  backgroundColor: "red";
  animationDelay: number;
}

export const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`;

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid;
  border-color: red;
`;

const getSlidingInImageAnimation = (directionSlide: "left" | "right") => keyframes`
0% {${directionSlide}:100%}
100% {${directionSlide}:0%}
`;

export const StyledImg = styled.img<Partial<StyledPropsI>>`
  width: 33.333%;
  position: relative;
  animation: ${(props) =>
      getSlidingInImageAnimation(props.directionSlide || "left")}
       ${(props)=>props.animationDelay}s ease-in-out;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 33.33%;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h1``;

export const StyledParagraph = styled.p``;

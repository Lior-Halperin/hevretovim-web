import styled, { keyframes } from "styled-components";

interface StyledPropsI {
  directionSlide: "left" | "right";
  backgroundColor: "primary" | "secondary";
  animationDelay: number;
}

export const StyledWrapper = styled.div`
  margin: 1rem;
  position: relative;
  overflow: hidden;
`;

const getSlidingButtonAnimation = (
  directionSlide: "left" | "right" | "top" | "bottom"
) => keyframes`
 0% {${directionSlide}:100%}
100% {${directionSlide}:0%} 

`;

export const StyledDonateButton = styled.button<Partial<StyledPropsI>>`
  color: wheat;
  -webkit-text-stroke: 0.5px black;
  font-weight: bold;
  padding: 0.3rem 1rem;
  border-radius: 35px;
  background-color: ${(props) =>
    props.backgroundColor === "primary"
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  position: relative;
  animation: ${getSlidingButtonAnimation("top")} 2.5s ease-in-out;
`;

import NavBar from "../NavBar/NavBar";
import {
  StyledWrapper,
  StyledContainer,
  StyledImg,
  StyledTextContainer,
  StyledTitle,
  StyledParagraph,
} from "./Header.styled";
import imgLeft from "../../assets/boxes_with_food.jpg";
import imgRight from "../../assets/yuval.jpg";

function Header(): JSX.Element {
  return (
    <StyledWrapper className="Header">
      <NavBar />
      <StyledContainer>
        <StyledImg src={imgLeft} alt="" directionSlide="right" animationDelay={1}/>
        <StyledTextContainer>
          <StyledTitle>סיוע לאוכלוסייה הענייה בישראל</StyledTitle>
          <StyledParagraph>
            בואו להדליק יחד איתנו את האור. הנכם מוזמנים לתרום ולהתנדב בחלוקה
            ואריזת מזון למשפחות נזקקות. (בעמותה אין מקבלי שכר וכל הצוות וההנהלה
            פועלים בהתנדבות)
          </StyledParagraph>
        </StyledTextContainer>
        <StyledImg src={imgRight} alt="" directionSlide="left" animationDelay={2}/>
      </StyledContainer>
    </StyledWrapper>
  );
}

export default Header;

import NavBar from "../NavBar/NavBar";
import {
  StyledWrapper,
  StyledContainer,
  StyledImg,
  StyledTextContainer,
  StyledTitle,
  StyledParagraph,
  StyledButtonContainer,
} from "./Header.styled";
import { useTranslation } from "react-i18next";
import imgLeft from "../../assets/boxes_with_food.jpg";
import imgRight from "../../assets/yuval.jpg";
import ActionButton from "../ActionButton/ActionButton";

function Header(): JSX.Element {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <StyledWrapper className="Header">
      <NavBar />
      <StyledContainer>
        <StyledImg
          src={imgLeft}
          alt=""
          directionSlide="right"
          animationDelay={1}
        />
        <StyledTextContainer>
          <StyledTitle>{t("header_title")}</StyledTitle>
          <StyledParagraph>{t("header_paragraph")}</StyledParagraph>
          <StyledButtonContainer>
            <ActionButton
              animationDelay={2000}
              backgroundColor="primary"
              text="לתרומה"
            />
            <ActionButton
              animationDelay={3000}
              backgroundColor="secondary"
              text="להתנדבות"
            />
          </StyledButtonContainer>
        </StyledTextContainer>
        <StyledImg
          src={imgRight}
          alt=""
          directionSlide="left"
          animationDelay={2}
        />
      </StyledContainer>
    </StyledWrapper>
  );
}

export default Header;

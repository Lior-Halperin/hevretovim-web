import { useEffect, useState } from "react";
import { StyledDonateButton, StyledWrapper } from "./ActionButton.styled";

interface ActionButtonI {
  text: string;
  backgroundColor: "primary" | "secondary";
  animationDelay:number;
}

function ActionButton(props:ActionButtonI): JSX.Element {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
          setVisible(true);
        }, props.animationDelay);
    
        return () => clearTimeout(timer);
      }, []);

  return (
    <>
    <StyledWrapper>
    {visible &&
      <StyledDonateButton type="button" animationDelay={props.animationDelay} backgroundColor={props.backgroundColor}>{props.text}</StyledDonateButton>
    }
    </StyledWrapper>

</>
  );
}
export default ActionButton;

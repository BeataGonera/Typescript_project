import { StyledButton } from "./Button.style";

export const Button = ({ButtonText, username, password}) => {

    const handleOnClick = () => {
        localStorage.setItem("username", JSON.stringify(username))
        localStorage.setItem("password", JSON.stringify(password))
    }

    return ( 
        <StyledButton onClick={handleOnClick}>
            {ButtonText}
        </StyledButton>
     );
}
 

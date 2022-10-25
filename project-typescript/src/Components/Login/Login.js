import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { StyledLogin } from './StyledLogin.style';
import { useState } from "react";

export const Login = () => {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    console.log(`username: ${username}`)
    console.log(`password: ${password}`)


    return ( 
        <StyledLogin>
            <Input labelText={"Username"} inputType={"text"} setInputValue={setUsername}/>
            <Input labelText={"Password"} inputType={"password"} setInputValue={setPassword}/>
            <Button ButtonText={"Zaloguj"} username={username} password={password}/>
        </StyledLogin>
     );
}
 

import { StyledNav } from "./Nav.style";
import { NavLink } from "react-router-dom";

export const Nav = () => {
    return ( 
        <StyledNav>
            <NavLink className={({isActive}) => (isActive ? "navlink navlink-active" : "navlink")} to="/" end>Home</NavLink>
            <NavLink className={({isActive}) => (isActive ? "navlink navlink-active" : "navlink")} to="/login">Login</NavLink>
        </StyledNav>
     );
}
 

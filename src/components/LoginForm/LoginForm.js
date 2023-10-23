import { ContainerHeader, HeaderStyled } from "components/Navigation/Navigation.styled"
import { NavLink } from "react-router-dom"
import { ContainerLoginDiv } from "./LoginForm.styled"

const LoginForm = ({onLogin}) => {
    return <>
    <HeaderStyled>
    <ContainerHeader>
      <nav>
      <NavLink to="/contacts">Contacts</NavLink>
     </nav> 
   </ContainerHeader> 
  </HeaderStyled> 
   <section>
        <ContainerLoginDiv>
            <form onSubmit={onLogin}>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Login</button>
            </form>
        </ContainerLoginDiv>
   </section>
    </>
}
export default LoginForm
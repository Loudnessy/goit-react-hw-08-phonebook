import { ContainerHeader, HeaderStyled } from "components/Navigation/Navigation.styled"
import { NavLink } from "react-router-dom"
import { ContainerRegisterDiv } from "./RegisterForm.styled"

const RegisterForm = ({onSignUp}) => {
    return <>
    <HeaderStyled>
      <ContainerHeader>
        <nav>
        <NavLink to="/contacts">Contacts</NavLink>
       </nav> 
     </ContainerHeader> 
    </HeaderStyled> 
    <section>
        <ContainerRegisterDiv>
            <form onSubmit={onSignUp}>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Register</button>
            </form>
        </ContainerRegisterDiv>
    </section>
    </>
}
export default RegisterForm
import { ContainerHeader, HeaderStyled } from "components/Navigation/Navigation.styled"
import { NavLink, useNavigate } from "react-router-dom"
import { ContainerRegisterDiv } from "./RegisterForm.styled"
import { useEffect } from "react"

const RegisterForm = ({onSignUp, isLoggedIn}) => {
    const navigate = useNavigate()
    useEffect(() => {
      if (isLoggedIn) {
        navigate("/contacts", { replace: true }) 
      }
    }, [navigate])
    
    return <>
    <HeaderStyled>
      <ContainerHeader>
        <nav>
        <NavLink to="/register">Register</NavLink>
       <NavLink to="/login">Login</NavLink>
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
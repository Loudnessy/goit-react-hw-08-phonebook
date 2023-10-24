import { ContainerHeader, HeaderStyled } from "components/Navigation/Navigation.styled"
import { NavLink, useNavigate } from "react-router-dom"
import { ContainerLoginDiv } from "./LoginForm.styled"
import { useEffect } from "react"

const LoginForm = ({onLogin, isLoggedIn}) => {
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
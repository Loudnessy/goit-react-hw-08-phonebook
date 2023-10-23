import { NavLink } from "react-router-dom"
import { Container, ContainerHeader, HeaderStyled } from "./Navigation.styled"
const Navigation = ({isLoggedIn, userName}) => {
    return isLoggedIn ?  (
      <>
    <HeaderStyled>
      <ContainerHeader>
        <nav>
        <NavLink to="/contacts">Contacts</NavLink>
       </nav> 
     </ContainerHeader> 
    </HeaderStyled> 
    <section>
     <Container> <h1>Welcome back {userName}</h1></Container>
    </section>
    </>
    )

    : 
    (<>
    <HeaderStyled>
     <ContainerHeader>
       <nav>
       <NavLink to="/register">Register</NavLink>
       <NavLink to="/login">Login</NavLink>
      </nav>
    </ContainerHeader>
  </HeaderStyled>
  <section>
  <Container> <h1>Hello User! If u want to work with contacts u need to logIn or logOut</h1></Container>
 </section>
</>)
}
export default Navigation
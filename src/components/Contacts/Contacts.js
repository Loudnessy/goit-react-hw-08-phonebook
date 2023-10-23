import { StyledDiv } from "components/Contacts/Contacts.styled"
import { fetchContacts } from "api/api"
import { ContactForm } from "components/ContactForm/ContactForm"
import { ContactList } from "components/ContactList/ContactList"
import { Filter } from "components/Filter/Filter"
import { ContainerHeader, HeaderStyled } from "components/Navigation/Navigation.styled"
import { UserMenu } from "components/UserMenu/UserMenu"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { Container } from "./Contacts.styled"

const Contacts = ({onSubmitContact,onChangeInput,contacts,filter, filterByName, deletingContact, userEmail, onLogout, isLoggedIn}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    useEffect(() => {
        
        if (!isLoggedIn) {
          return   navigate("/", { replace: true })
        } else {
            dispatch(fetchContacts())
        }
    }, [dispatch, isLoggedIn, navigate])
    return <>
    <HeaderStyled>
      <ContainerHeader>
        <nav>
        <NavLink to="/contacts">Contacts</NavLink>
       </nav> 
     </ContainerHeader> 
    </HeaderStyled> 
    <section>
        <Container>
            <UserMenu userEmail={userEmail} onLogout={onLogout}/>
            <StyledDiv>
            <h1>Phonebook</h1>
            <ContactForm formSubmit={onSubmitContact}/>
            <h2>Contacts</h2>
            <Filter input={onChangeInput}/>
        <ContactList contacts={contacts} filter={filter} filtering={filterByName} deleting={deletingContact}/>
        </StyledDiv> 
        </Container>
   </section> 
   </>
    
}
export default Contacts
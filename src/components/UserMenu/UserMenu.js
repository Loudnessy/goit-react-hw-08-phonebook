import { StyledUserDiv } from "./UserMenu.styled"

export const UserMenu = ({userEmail, onLogout}) => {
    return <StyledUserDiv>
  <p>{userEmail}</p>
  <button onClick={onLogout}>Logout</button>
</StyledUserDiv>
}
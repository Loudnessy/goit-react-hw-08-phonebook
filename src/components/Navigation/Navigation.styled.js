import styled from "styled-components";
export const ContainerHeader = styled.div`
 width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: right;
  nav {
    display: flex;
    justify-content: flex-end;
    gap: 25px;
  }
  nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  nav a:hover, 
       :focus {
        text-decoration: underline
       }

`
export const HeaderStyled = styled.header`
 background-color: orange;
  color: #fff;
  text-align: center;
  padding: 5px;
`
export const Container = styled.div`
display: flex;
 width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f8f8f8;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  height: 500px;
  justify-content: center;
  align-items: center;
`
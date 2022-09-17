import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
   }

   html,
   body{
     overflow-x: hidden;
   }
   
`
export const Template = styled.div`
    background-color: #444;
    width: 100vw;
    min-height: 100vh;
`
export const PageContainer = styled.div`
    max-width: 1250px;
    margin: auto;
    padding: 0 5px;
`
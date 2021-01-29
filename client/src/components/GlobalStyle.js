import { createGlobalStyle } from "styled-components";
import background from "../assets/images/background.jpg";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        width: 100vw;
        height: 100vh;
        background-image: url(${background});
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        font-family: 'Montserrat', sans-serif;
        overflow: hidden;
    }
    #root, .App{
        width: 100%;
        height: 100%;
    }

    button, input, textarea {
        font-family: 'Montserrat', sans-serif;
    }

`;

export default GlobalStyle;

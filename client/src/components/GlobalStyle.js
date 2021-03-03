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
        font-family: 'IBM Plex Mono', monospace;
        overflow: hidden;
    }
    #root, .App{
        width: 100%;
        height: 100%;
    }

    button, input, textarea {
        font-family: 'IBM Plex Mono', monospace;
    }

    // custom scroll bar
    /* width */
    ::-webkit-scrollbar {
    width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }

`;

export default GlobalStyle;

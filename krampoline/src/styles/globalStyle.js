import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

    ${reset}

    


line-height: normal;
    

    *{
        box-sizing: border-box;
        margin: 0;
    }

    html,
    body {
        /* font-family: 'EliceDXNeolli', sans-serif;
        font-size: 62.5%; */
    }

    body {
        
        padding: 0 auto;
      }
    
      a {
        cursor: pointer;
        text-decoration: none;
        color: inherit;
      }
    
      button {
        border: none;
        background: none;
        cursor: pointer;
        font: inherit;
      }
    
      select {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        cursor: pointer;
      }
`;

export default GlobalStyle;

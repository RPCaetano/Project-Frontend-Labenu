import {createGlobalStyle}from 'styled-components'


const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing:border-box ;
    background:  rgba(255, 255, 255, 0.815);
}
:root{
--white:#fff;
--background: rgba(255, 255, 255, 0.815);
--gray-line:#dcdde0d0;
--text:rgba(19, 19, 17, 0.664);
--text-highlight:#1f2cc5;
--title:rgba(255,186,0,255);

--red:#e61538;
--green:#4CD62B;
--yellow: rgb(207, 207, 59);
--yellow-dark:yellow;
--blue-twitter:#2AA9E0;
}

@media(max-width:1888px){
html{
    font-size:93.75%;
    }
}

@media(max-width:728px){
    html{
        font-size:87.5%;
        }
    }

body{
    background-color:var(--background) ;
    color:var(--text);
}

body,input,textarea,button{
    font:400 16px "Akaya Telivigala", sans-serif;
}

button{
    cursor:pointer;
}
a{
    font-size: 20px;
    text-decoration:none;
}

h1{
    font:600 16px "Akaya Telivigala"
}
`
export default GlobalStyle
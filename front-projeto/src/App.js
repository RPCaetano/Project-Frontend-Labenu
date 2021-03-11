import Routes from './Routes/Routes'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './Styles/Theme'
import GlobalStyle from '../src/Styles/Global'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Menu from './Components/Menu/Menu'
import Header from './Components/Header/Header'


function App() {
  const token = localStorage.getItem("token")
  const[rightButtonText,setRightButtonText]=useState(token?"Logout" : "Login")
  
  return (
<ThemeProvider theme={theme}>   
<BrowserRouter> 
<Header/>
<Menu rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
   <GlobalStyle/>
   <Routes setRightButtonText={setRightButtonText}/>
   </BrowserRouter>
</ThemeProvider>
  );
}

export default App;

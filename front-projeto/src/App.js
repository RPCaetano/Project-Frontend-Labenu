import Routes from './Routes/Routes'
import './Styles/Global.css'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './Styles/Theme'

function App() {
  return (
<ThemeProvider theme={theme}>    
    <Routes/>
</ThemeProvider>
  );
}

export default App;

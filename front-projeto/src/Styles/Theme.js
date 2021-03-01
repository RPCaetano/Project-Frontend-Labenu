import {createMuiTheme} from '@material-ui/core/styles'
import { primaryColor,secondaryColor } from '../Styles/Colors'


const theme = createMuiTheme({

palette:{
    primary:{
        main:primaryColor,
        contrastText:'#fff'
    },
    secondary:{
        main:secondaryColor,
        contrastText:'#fff'
    }
}

})
export default theme;
import { useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { goToAllCollection} from '../Routes/Cordinator';


export const useUnprotectPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token) {
            goToAllCollection(history)
        }
    }, [history])

}
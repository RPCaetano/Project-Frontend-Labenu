import { useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { goToRegister } from '../Routes/Cordinator';


export const useUnprotectPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token) {
            goToRegister(history)
        }
    }, [history])

}
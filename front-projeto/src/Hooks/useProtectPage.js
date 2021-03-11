import { useHistory } from 'react-router-dom';
import { goToLoginPage } from './../Routes/Cordinator'
import {useLayoutEffect}from 'react'

 const useProtectPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = window.localStorage.getItem("token")

        if (!token) {
            goToLoginPage(history)
        }
    }, [history])

}
export default useProtectPage
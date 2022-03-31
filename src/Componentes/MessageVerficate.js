import React from 'react'
import { Link, useNavigate , useLocation} from 'react-router-dom'
import Header from './Landing/Header'

const MessageVerficate = () => {

    let location = useLocation();

    const navigate = useNavigate()
    let { from } =  location.state || { from: { pathname: "/signIn" } };
    const historySend = () => {
        navigate(from)

    }
    return (
        <>
            <Header />
            <div>
                <div>
                   Verificacion de correo exitosamente
                </div>

                <div onClick={historySend}>
                    SignIn
                </div>

            </div>
        </>

    )
}

export default MessageVerficate

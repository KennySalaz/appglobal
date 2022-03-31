import React from 'react'
import { Link } from 'react-router-dom'
import logoGlobals from '../../images/logohome.png'

const Error404 = () => {
    return (
        <div id="notfound">

            <div class="notfound">
                <div class="notfound-404">
                    <h1>404</h1>
                </div>
                <div style={{ display:'flex' }}>
                    <img style={{ width: '172px', }} src={logoGlobals} />
                </div>
                <h2>We are sorry, Page not found!</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <Link to='/'>Back To Homepage</Link>
            </div>
        </div>
    )
}

export default Error404

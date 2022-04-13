import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StateContext } from '../../../Context/UseContextGlobal'
import '../../../Style/dashboard.css'
import logoDash from '../../images/fvicon.png'
import message1 from '../../images/messages-1.jpg'
import message2 from '../../images/messages-2.jpg'
import message3 from '../../images/messages-3.jpg'
import profile from '../../images/profile-img.jpg'



const DashHeader = ({open}) => {

    const { user , signUp} = useContext(StateContext)
    
    const navigate = useNavigate()
    
    const exitUser = () => {
        signUp()
        navigate('/')
    }
    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between">
                    <Link to={'/'} className="logo d-flex align-items-center" style={{ textDecoration: 'none' }}>
                        <img src={logoDash} />
                        <span className="d-none d-lg-block">Globalnet</span>
                    </Link>
                 
                    <i onClick={open} className="bi bi-list toggle-sidebar-btn"></i>
                </div>

                <div className="search-bar">
                    <form className="search-form d-flex align-items-center" method="POST" action="#">
                        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                        <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                    </form>
                </div>

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">

                        <li className="nav-item d-block d-lg-none">
                            <a className="nav-link nav-icon search-bar-toggle " href="#">
                                <i className="bi bi-search"></i>
                            </a>
                        </li>

                     
                        <li className="nav-item dropdown pe-3">

                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <img src={user?.FotoUrl} className="rounded-circle" />
                                <span className="d-none d-md-block dropdown-toggle ps-2">{user?.Nombre}</span>
                            </a>

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>{user?.Nombre} </h6>
                                    <span>Web Designer</span>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <Link className="dropdown-item d-flex align-items-center"  to={'/Profile'} >
                                        <i className="bi bi-person"></i>
                                        <span>My Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <Link to={'/profile'} className="dropdown-item d-flex align-items-center" >
                                        <i className="bi bi-gear"></i>
                                        <span>Account Settings</span>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                               {/*  <li>
                                    <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                        <i className="bi bi-question-circle"></i>
                                        <span>Need Help?</span>
                                    </a>
                                </li> */}
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li onClick={exitUser}>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className="bi bi-box-arrow-right"></i>
                                        <span>Sign Out</span>
                                    </a>
                                </li>

                            </ul>
                        </li>

                    </ul>
                </nav>

            </header>
        </>
    )
}

export default DashHeader
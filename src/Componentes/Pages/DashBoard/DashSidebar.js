import React, { useContext, useEffect, useState } from 'react'
import  AOS  from 'aos'
import 'aos/dist/aos.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { StateContext } from '../../../Context/UseContextGlobal'
import '../../../Style/dashboard.css'


const DashSidebar = ({ isOpenDasboard, setIsOpenDasboard }) => {


    const { signUp } = useContext(StateContext)
    const navigate = useNavigate()
    

    const [isOpenLink, setIsOpenLink] = useState(false)
    const [isOpenLink2, setIsOpenLink2] = useState(false)
    const [isOpenLink3, setIsOpenLink3] = useState(false)
    const [isOpenLink4, setIsOpenLink4] = useState(false)
    const [isOpenLink5, setIsOpenLink5] = useState(false)
    const [isOpenLink6, setIsOpenLink6] = useState(false)

    const [isLink, setIsLink] = useState()

    const linkOpen = () => {
        setIsOpenLink(!isOpenLink)
    }
    const linkOpen2 = () => {
        setIsOpenLink2(!isOpenLink2)
    }

    const exit = () => {
        signUp()
        navigate('/')
    }

    
    useEffect(() => {
        AOS.init({
           
            duration: 1000,
            easing: 'ease',
            once:false
        });

        
    })

    return (

        <>
            <aside id="sidebar" className='sidebar'>

                <ul className="sidebar-nav" id="sidebar-nav" data-aos="fade-right">

                    <li className="nav-item" data-aos="fade-right"   data-aos-duration="700" >
                        <Link to='/dashBoardMain' className="nav-link ">
                            <i className="bi bi-grid"></i>
                            <span>Home</span>
                        </Link>
                    </li>

                    

                    <li className="nav-item" data-aos="fade-right"   data-aos-duration="1300" >
                        <NavLink style={{ textDecoration: 'none' }} className={({ isActive }) => [(isActive ? 'nav-link2  collapsed' : ' nav-link collapsed ')]} to={'/addproduct'}>
                            <i className="bi bi-dash-circle"></i>
                            <span>Add Productos</span>
                        </NavLink>
                    </li>

                    <li className="nav-item" data-aos="fade-right"   data-aos-duration="1300" >
                        <NavLink style={{ textDecoration: 'none' }} className={({ isActive }) => [(isActive ? 'nav-link2  collapsed' : ' nav-link collapsed ')]} to={'/products'}>
                            <i className="bi bi-question-circle"></i>
                            <span>Productos</span>
                        </NavLink>
                    </li>

                    <li className="nav-item" data-aos="fade-right"   data-aos-duration="1600" >
                        <NavLink style={{ textDecoration: 'none' }} className={({ isActive }) => [(isActive ? 'nav-link2  collapsed' : ' nav-link collapsed ')]} to={'/profile'}>
                            <i className="bi bi-person"></i>
                            <span>Profile</span>
                        </NavLink>
                    </li>
               

                    {/* 
                    <li onClick={linkOpen} className="nav-item">
                        <a className={`${(isOpenLink ? 'nav-link' : 'nav-link collapsed')}`} data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide"></i><span>Productos</span><i className="bi bi-chevron-down ms-auto">

                            </i>
                        </a>
                        <ul className={`${(isOpenLink ? 'nav-content ' : 'collapse')}`} data-bs-parent="#sidebar-nav">
                            <li>
                                <NavLink
                                    to='/products'
                                    className={({ isActive }) => [(isActive ? 'acLinkClasss' : ' ')]}
                                >
                                    <i className="bi bi-circle"></i><span>Ver productos</span>
                                </NavLink>
                            </li>
                            <li>
                                <a href="components-alerts.html">
                                    <i className="bi bi-circle"></i><span>Ver Imagenes</span>
                                </a>
                            </li>


                        </ul>
                    </li>

                    <li onClick={linkOpen2} className="nav-item">
                        <a className={`${(isOpenLink2 ? 'nav-link' : 'nav-link collapsed')}`} data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-journal-text"></i><span>Forms</span><i className="bi bi-chevron-down ms-auto">

                            </i>
                        </a>
                        <ul id="forms-nav" className={`${(isOpenLink2 ? 'nav-content ' : 'collapse')}`} data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="forms-elements.html">
                                    <i className="bi bi-circle"></i><span>Form Elements</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms-layouts.html">
                                    <i className="bi bi-circle"></i><span>Form Layouts</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms-editors.html">
                                    <i className="bi bi-circle"></i><span>Form Editors</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms-validation.html">
                                    <i className="bi bi-circle"></i><span>Form Validation</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-layout-text-window-reverse"></i><span>Tables</span><i className="bi bi-chevron-down ms-auto">

                            </i>
                        </a>
                        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="tables-general.html">
                                    <i className="bi bi-circle"></i><span>General Tables</span>
                                </a>
                            </li>
                            <li>
                                <a href="tables-data.html">
                                    <i className="bi bi-circle"></i><span>Data Tables</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-bar-chart"></i><span>Charts</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="charts-chartjs.html">
                                    <i className="bi bi-circle"></i><span>Chart.js</span>
                                </a>
                            </li>
                            <li>
                                <a href="charts-apexcharts.html">
                                    <i className="bi bi-circle"></i><span>ApexCharts</span>
                                </a>
                            </li>
                            <li>
                                <a href="charts-echarts.html">
                                    <i className="bi bi-circle"></i><span>ECharts</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-gem"></i><span>Icons</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="icons-bootstrap.html">
                                    <i className="bi bi-circle"></i><span>Bootstrap Icons</span>
                                </a>
                            </li>
                            <li>
                                <a href="icons-remix.html">
                                    <i className="bi bi-circle"></i><span>Remix Icons</span>
                                </a>
                            </li>
                            <li>
                                <a href="icons-boxicons.html">
                                    <i className="bi bi-circle"></i><span>Boxicons</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-heading">Pages</li> */}

                   

{/* 
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="pages-contact.html">
                            <i className="bi bi-envelope"></i>
                            <span>Contact</span>
                        </a>
                    </li>
 */}
                  {/*   <li className="nav-item">
                        <a className="nav-link collapsed" href="pages-register.html">
                            <i className="bi bi-card-list"></i>
                            <span>Register</span>
                        </a>
                    </li>
 */}
                    {/*    <li onClick={exit} className="nav-item">
                         <a className="nav-link collapsed">
                            <i className="bi bi-box-arrow-in-right"></i>
                            <span>Login</span>
                      </a> 
                    </li> */}

{/* 
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="pages-blank.html">
                            <i className="bi bi-file-earmark"></i>
                            <span>Blank</span>
                        </a>
                    </li> */}

                </ul>

            </aside>





        </>
    )
}

export default DashSidebar
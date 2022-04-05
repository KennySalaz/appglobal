import React, { useState } from 'react'
import DashFooter from '../DashFooter'
import DashHeader from '../DashHeader'
import DashSidebar from '../DashSidebar'

function Products(props) {


    const [isOpenDasboard, setIsOpenDasboard] = useState(false)


    const open = () => {
        setIsOpenDasboard(!isOpenDasboard)
    }

    return (
        <>
            <div className={`${(isOpenDasboard && 'toggle-sidebar')}`} >
                <DashHeader open={open} />
                <DashSidebar isOpenDasboard={isOpenDasboard} setIsOpenDasboard={setIsOpenDasboard} />
               
                <main id="main" className="main">

                    <div className="pagetitle">
                        <h1>Chart.js</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item">Charts</li>
                                <li className="breadcrumb-item active">Chart.js</li>
                            </ol>
                        </nav>
                    </div>

                    <p>Chart.JS Examples. You can check the <a href="https://www.chartjs.org/docs/latest/samples/" target="_blank">official website</a> for more examples.</p>

                    <section className="section">
                        <div className="row">

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Line Chart</h5>


                                       



                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Bar CHart</h5>


                                     



                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Pie Chart</h5>


                                      


                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Doughnut Chart</h5>


                                      


                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Radar Chart</h5>


                                       

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Polar Area Chart</h5>


                                       

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Stacked Bar Chart</h5>


                                      


                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Bubble Chart</h5>


                                       


                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                </main>
                <DashFooter />
            </div>

        </>
    )
}

export default Products
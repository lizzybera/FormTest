// import React from 'react'

import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
// import Sider from "./Sider"

const LayOut = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>

    // <div className="flex">
    //     <Sider />
    //     <Outlet />
    // </div>

    // youtube structure
    // <div>
    //     <Header />
    //     <div className="flex">
    //         <Sider />
    //         <Outlet />
    //     </div>
    // </div>

    // youtube structure2
    // <div>
    //     <Sider />
    //     <div>
    //         <Header />
    //         <Outlet />
    //     </div>
    // </div>
  )
}

export default LayOut
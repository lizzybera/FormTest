// import React from 'react'

import { useState } from "react"
import { Link } from "react-router-dom"

const Sider = () => {
  const [theme, setTheme] = useState(false)
  return (
    <div className={` w-[300px] bg-[blue]`}>
        <Link to="/"
        onClick={() =>{
          setTheme(!theme)
        }}
        >Landing Page</Link>
        <Link to="/home">Home Page</Link>
    </div>
  )
}

export default Sider



// onclick({}=> {
//   setTheme(!theme)
// })

// darkMode = bg-black, text-white
// lightMode = text-black, bg-white

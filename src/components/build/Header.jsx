// import React from 'react'

import { useState } from "react"
import { FaRegMoon } from "react-icons/fa6"
import { MdOutlineWbSunny } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { themed } from "../../global/GlobalState"

const Header = () => {
  const [theme, setTheme] = useState(false)

  const changeTheme = useSelector((state) => state.theme)
  console.log(changeTheme, "theme from redux");
  const dispatch = useDispatch()
  
  return (
    <div className={` ${theme ? "bg-white text-black" : "bg-black text-white"} w-full h-[70px] flex items-center justify-center `}>
      <div className=" w-[80%]">

        {
          !changeTheme ?
            <MdOutlineWbSunny className="cursor-pointer" onClick={() => {
              setTheme(!theme)
              dispatch(themed())
            }} /> 
            
            :

            <FaRegMoon className="cursor-pointer" onClick={() => {
              setTheme(!theme)
              dispatch(themed())
            }} />
        }
      </div>
    </div>
  )
}

export default Header
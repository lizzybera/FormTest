// import React from 'react'

// import { FaPerson } from "react-icons/fa6"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { MdEmail, MdPassword } from "react-icons/md"
import * as yup from "yup"
import { signInUser } from "../../api/authApi"
import { useNavigate } from "react-router-dom"


const SignIn = () => {

    const navigate = useNavigate()

const Schema = yup.object({
  email : yup.string().email().required(),
  password : yup.string().min(8).required(),
})

const {
  register, handleSubmit, reset, formState : {errors}
} = useForm({
resolver : yupResolver(Schema)
})

const submit = handleSubmit((data) => {
const {email, password} = data

signInUser({email, password}).then((res) => {
    navigate("/home")
    console.log(res, "the User's Info");
    
})
    console.log(data, "data from form");
  reset()
})


  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[rgb(228,172,102)]" style={{ background: "linear-gradient(90deg, rgba(228,172,102,1) 0%, rgba(215,214,79,1) 35%, rgba(205,65,117,1) 100%)" }}>
    <form onSubmit={submit} className="w-[40%] px-3 py-7 shadow-lg bg-white rounded-md flex flex-col justify-center items-center gap-6">
        <h1 className="text-xl font-bold">Sign In</h1>
        <p className="font-medium">Sign In your account</p>

        {/* inputs */}
        <div className="w-[85%] gap-4 flex flex-col">

          {/* email */}
          <div>
          <div className="flex w-full h-14 bg-purple-200 rounded-xl pr-3">
            <div className="w-[10%] flex justify-center items-center">
              <MdEmail size={25} />
            </div>

            <input type="text" className="bg-transparent outline-none w-full" placeholder="Email" {...register("email")} />
          </div>
          {
            errors?.email &&
             <div className="text-xs text-red-400">Please input a valid userName</div>
          }
          </div>
          <div>{errors?.email?.message}</div>

          {/* password */}
          <div>
          <div className="flex w-full h-14 bg-purple-200 rounded-xl pr-3">
            <div className="w-[10%] flex justify-center items-center">
              <MdPassword size={25} />
            </div>

            <input type="text" className="bg-transparent outline-none w-full" placeholder="Password" {...register("password")} />
          </div>
          {
            errors?.password &&
             <div className="text-xs text-red-400">Please input a valid Password</div>
            }
            <div>{errors?.password?.message}</div>
          </div>

        </div>

        {/* buttons */}
        <div className="w-[85%] flex flex-col items-center gap-4">
          <button className="flex w-full h-14 bg-purple-600 justify-center items-center text-white text-lg font-bold cursor-pointer hover:bg-purple-500 duration-75 transition-all rounded-full" 
          type="submit"
         
          >Sign In</button>

          <p className="text-lg">or</p>

          <button className="flex w-full h-12 border-purple-600 justify-center items-center text-purple-600 border text-base font-semibold cursor-pointer hover:scale-x-105 duration-75 transition-all rounded-full">Sign Up with Google</button>

          <p>Don&apos;t have an account? <span className="text-purple-600">Sign Up</span> </p>
        </div>


      </form>
    </div>
  )
}

export default SignIn

// methods
// get
// post - create
// patch - edit
// delete -


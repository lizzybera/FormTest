import axios from "axios"

const url = "https://todobe-x7ru.onrender.com/api"

export const registerUser = async(data) =>{
    return await axios.post(`${url}/reg`, data).then((res) => {
        return res.data
    })
}

export const signInUser = async(data) => {
    return await axios.post(`${url}/sign`, data).then((res) => {
        return res.data
    })
}
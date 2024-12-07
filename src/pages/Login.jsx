import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import './FormStyle.css'
function Login() {
    const navigation = useNavigate()
    const [data, setData]= useState({})
    const formChangeHandler = (event, field) => {
        let tempData = {...data}
        tempData[field] = event.target.value
        setData(tempData)
    }

    const formSubmit = (e) => {
        e.preventDefault()
        
        axios.post("https://sampl1-backend.onrender.com/api/auth/login",data)
        .then(res =>{
            console.log(res.data)
            localStorage.setItem("token", res.data.token)
            navigation("/")
        })
    }
  return (
    <>
        <form onSubmit = {formSubmit}>
            <input type="text" placeholder="enter name" name="username" id="" onChange = {(e) => formChangeHandler(e,"username")}/>
            <p>{data.username}</p>
            <input type="password" placeholder="enter password" name="password" id="" onChange = {(e) => formChangeHandler(e,"password")}/>
            <p>{data.password}</p>
            <input type="submit" value="Login" />
        </form>
    </>
  )
}

export default Login
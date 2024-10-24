import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

function Homepage() {
  const [todos, setTodo] = useState([])
  const [task, setTask] = useState("")

  const navigate = useNavigate();

  const getTodo = () => {
    let token = localStorage.getItem("token")
    const headers = {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
    }
    axios.get("https://sampl1-backend.onrender.com/api/todos", {headers})
    .then(res => {
        setTodo(res.data)
    })
    .catch(err => {
        navigate("/login")
        console.log(err.response)
    })
  }

  useEffect(() => {
    getTodo()
  }, [])

  const formSubmit = (e) => {
    e.preventDefault()
    let token = localStorage.getItem("token")
    const headers = {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
    }
    axios.post("http://localhost:5005/api/todos", {title: task}, {headers})
    .then(res => {
        console.log(res.data)
        getTodo()
    })
  }

  return (
    <>
        <h1>Todo list</h1>
        <form onSubmit = {formSubmit}>
            <input type="text" name="task" id="" onChange = {(e)=>setTask(e.target.value)} value = {task} />
            <input type="submit" value="Submit" />
        </form>
        <div>
            {todos.map((todo, index)=>{
                return(
                    <p key = {index}>{todo.title}</p>
                )
            })}
        </div>
    </>
  )
}

export default Homepage
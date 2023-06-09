import React, { Component } from 'react'
import axios from "axios"

export default class LoginPage extends Component {
  state={
    username:"",
    password:""
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  click=()=>{
    axios.post("http://localhost:4000/store",{
      username:this.state.username,
      password:this.state.password
    })
    // fetch("http://localhost:5000/store-employee",{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   body:JSON.stringify({
    //     name:this.state.username,
    //     password:this.state.password
    //   })
    // })
    // .then((res)=>{
    //   console.log(res)
    // })
    
  }
  render() {
    return (
      <div>
        <p><input name="username" placeholder='Enter username' onChange={this.handleChange}/></p>
        <p><input name="password" placeholder='Enter password' onChange={this.handleChange}/></p>
        <button onClick={this.click}>Login</button>
      </div>
    )
  }
}
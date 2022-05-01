import React from "react"

export const loginhelper = (payload) => {
    alert('api')
    const requestparameters = {
        method : 'POST',
        headers : { 'Content-Type':'application/json'},
        body: JSON.stringify({email:payload.email,password:payload.password})
    }
    fetch('http://localhost:1234/login/',requestparameters).then(response =>response.json).then((data) => {
        console.log(data);
    }) ;
}
/*
handleLogin = () => {
    alert('login')
    const values=[];
    values[0] = this.state.email;
    values[1] = this.state.password;
    Loginhelper(values);
    <NavLink to='/HomePage'></NavLink>
}
*/
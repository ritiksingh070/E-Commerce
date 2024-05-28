import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const Login = ()=>{

    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const Navigate = useNavigate();
    
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })
    
    const handleLogin=async()=>{
        console.warn(email,password)
        let result = await fetch('https://e-comm-mf0u.onrender.com/login',{
            method:'post',body:JSON.stringify({email,password}),
            headers: {
                'content-Type': 'application/json',
            }
        });
        result = await result.json();
        console.warn(result)
        if(result.auth){
            localStorage.setItem("user",JSON.stringify(result.auth));
            localStorage.setItem("token",JSON.stringify(result.auth));
            Navigate("/")
        }else{
            alert("Please Enter correct details..")
        }
    }

    return(
        <div className='login'>
            <h1> Login Page</h1>
            <input type="text" className='inputBox' placeholder='Enter E-mail' 
            onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input type="password" className='inputBox' placeholder='Password' 
            onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button onClick={handleLogin} className="appButton" type="button"> Login </button>

        </div>
    )
}

export default Login
import React from "react";
import {useNavigate} from 'react-router-dom'
const AddProduct = ()=>{
    const navigate =useNavigate()
    const [name,setName]= React.useState('')
    const [price,setPrice]= React.useState('')
    const [category,setCategory]= React.useState('')
    const [company,setComapany]= React.useState('')
    const [error, setError] = React.useState(false)
    const addProduct=async()=>{

        console.warn(!name);
        if(!name || !price || !category ||!company){
            setError(true)
            return false;
        }    
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("https://e-comm-mf0u.onrender.com/add-product",{
            method:'post',
            body: JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result = await result.json();
        console.warn(result)
        navigate('/')
    }
    
    return(
        <div className="product">
            <h1>Add Product</h1>
            <input className="inputBox" type="text"placeholder="Enter Product name"
            value={name} onChange={(e)=>{setName(e.target.value)}} />
            {error && !name && <span className="invalid-input">Enter valid name</span>}

            <input className="inputBox" type="text"placeholder="Enter Price"
            value={price} onChange={(e)=>{setPrice(e.target.value)}} />
            {error && !price && <span className="invalid-input">Enter valid price</span>}

            <input className="inputBox" type="text"placeholder="Enter Category"
            value={category} onChange={(e)=>{setCategory(e.target.value)}} />
            {error && !category && <span className="invalid-input">Enter valid category</span>}

            <input className="inputBox" type="text"placeholder="Enter Company"
            value={company} onChange={(e)=>{setComapany(e.target.value)}} />
            {error && !company && <span className="invalid-input">Enter valid company</span>}
            
            <button onClick={addProduct} className="appButton">Add Product</button>
        </div>
    )
}

export default AddProduct
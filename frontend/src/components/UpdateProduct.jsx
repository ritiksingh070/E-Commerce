import React, { useEffect } from "react";
import {useParams ,useNavigate} from 'react-router-dom'

const UpdateProduct = ()=>{
    const [name,setName]= React.useState('')
    const [price,setPrice]= React.useState('')
    const [category,setCategory]= React.useState('')
    const [company,setCompany]= React.useState('')
    const params = useParams();
    const navigate = useNavigate();
    
    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails=async ()=>{
        console.warn(params);
        let result = await fetch(`https://e-comm-mf0u.onrender.com/product/${params.id}`,{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        // console.warn(result)
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const UpdateProduct=async()=>{
        console.warn(name,price,category,company)
        let result = await fetch(`https://e-comm-mf0u.onrender.com/product/${params.id}`,{
            method:'put',
            body: JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':"application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        console.warn(result)
        navigate('/');
    }
    
    return(
        <div className="product">
            <h1>Update Product</h1>
            <input className="inputBox" type="text"placeholder="Enter Product name"
            value={name} onChange={(e)=>{setName(e.target.value)}} />

            <input className="inputBox" type="text"placeholder="Enter Price"
            value={price} onChange={(e)=>{setPrice(e.target.value)}} />

            <input className="inputBox" type="text"placeholder="Enter Category"
            value={category} onChange={(e)=>{setCategory(e.target.value)}} />

            <input className="inputBox" type="text"placeholder="Enter Company"
            value={company} onChange={(e)=>{setComapany(e.target.value)}} />
            
            <button onClick={UpdateProduct} className="appButton">Add Product</button>
        </div>
    )
}

export default UpdateProduct
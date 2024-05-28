import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
 
const ProductList =()=>{
    const [products,setProduct]=useState([]);

    useEffect(()=>{
        getProduct();
    },[])

    const getProduct=async(req,resp)=>{
        let result = await fetch('https://e-comm-mf0u.onrender.com/products',{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setProduct(result);
    }

    const deleteProduct=async(id)=>{
        let result = await fetch(`https://e-comm-mf0u.onrender.com/product/${id}`,{
            method:"Delete",
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json()
        if(result){
            getProduct();
        }
    };
const searchHandle = async (event)=>{
    let key = event.target.value;
    if(key){
        let result = await fetch(`https://e-comm-mf0u.onrender.com/search/${key}`,{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        if(result){
            setProduct(result)
        }
    }else{
        getProduct();
    }
}
    return(
        <div className="product-list">
            <h2>ProductList</h2>
            <input className="search-box-product" type="text"  placeholder="Search Product"
            onChange={searchHandle}/>
            <ul>
                <li>S. No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Operation</li>
            </ul>
            {
                products.length>0 ? products.map((item,index)=>
                <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>$ {item.price}</li>
                <li>{item.category}</li>
                <li>
                    <button onClick={()=>deleteProduct(item._id)}>Delete</button>
                    <Link to={"/update/"+item._id}>Update</Link>
                </li>
                
            </ul>
                )
                :
                <h1>No Result Found..</h1>
            }
        </div>
    )
}
export default ProductList
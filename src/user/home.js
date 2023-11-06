import { useState } from "react";

const Myhome = async () => {
    const [allproducts, updateProducts]= useState();

    let url = 'https://1234-yashsharma32-ecommerce1-yzzh7hhgdye.ws-us105.gitpod.io/product';
    await fetch(url)
    .then(response=>response.json())
    .then(productsArray=>{
        updateProducts(productsArray);
    })

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <h1> keep shoping</h1>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
       
    )
}

export default Myhome;
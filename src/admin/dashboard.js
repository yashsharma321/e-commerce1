import { useState, useEffect } from "react"; 

 const Mydashboard = () =>{
    let[allproduct, updateProduct] = useState([]);
    const getProduct = async () => {
        let sellerid = localStorage.getItem("sellerid");
        let url = "https://1234-yashsharma32-ecommerce1-yzzh7hhgdye.ws-us105.gitpod.io/product?sellerid="+sellerid;
        await fetch(url)
        .then(response=>response.json())
        .then((productArray)=>{
            updateProduct(productArray.reverse());
        })
    }

    useEffect(()=>{
        getProduct()
    }, [1]);
 
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-info"> My Dashboard </h1>
                </div>
                
                <div className="col-lg-4 mt-4 text-center">
                    <i className="fa fa-suitcase fa-3x text-warning mb-3"></i>
                    <h3>Total Products <br/>{allproduct.length}</h3>
                    <p>Available in inventory</p>
                </div>

            </div>
        </div>      
    )
 }

 export default Mydashboard;
import { useState, useEffect } from "react";
import swal from "sweetalert";

const Mycart = () => {
    
    let [allproduct, updateProduct]= useState([]);
    const getProduct = async() => {
        let url = 'https://1234-yashsharma32-ecommerce1-yzzh7hhgdye.ws-us106.gitpod.io/cart';
        await fetch(url)
        .then(response=>response.json())
        .then(productsArray=>{
            updateProduct(productsArray.reverse());
        })
    }
    useEffect(()=>{
        getProduct();
    },[1]);

    const deleteCart = async (id, name) => {
        let url = 'https://1234-yashsharma32-ecommerce1-yzzh7hhgdye.ws-us106.gitpod.io/cart/'+id;
        let delData = {method : "DELETE"};
        await fetch(url, delData)
        .then(response=>response.json())
        .then(emptyres=>{
            swal(name+"","Deleted From Cart !", "success");
            getProduct();
        })
    }
    
    const myqty = async (pinfo, type) => {
        if(type==1){
            pinfo["qty"] = pinfo["qty"] + 1;
        } else {
            pinfo["qty"] = pinfo["qty"] - 1;
        }

        if(pinfo.qty <=  0){
            deleteCart(pinfo.id, pinfo.name);
        } else {
            let url = 'https://1234-yashsharma32-ecommerce1-yzzh7hhgdye.ws-us106.gitpod.io/cart/'+pinfo.id;
            let postData = {
                headers : {'Content-Type' : 'application/json'},
                method : 'PUT',
                body : JSON.stringify(pinfo)
            }
            try {
                await fetch(url, postData)
                .then(response=>response.json())
                .then(serRes=>{
                    swal(pinfo.name+""," Quantity updated in your cart.", "success");
                    getProduct();
                })
            } catch (error) {
                swal("Error", "While updating !", "warning");
            }
        } // else end here
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-8">
                    <h3 className="text-center text-primary">
                        <i className="fa fa-shopping-cart"></i> Item in Cart : {allproduct.length} 
                    </h3>
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Photo</th>
                                <th>Price</th>
                                <th>Quantity</th> 
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allproduct.map((product, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{product.name}</td>
                                            <td><img src={product.photo} height="30" width="50" /></td>
                                            <td>Rs. {product.price}</td>
                                            <td>
                                                <button onClick={myqty.bind(this, product, 1)}>+</button>
                                                    <input type="text" value={product.qty} />
                                                <button onClick={myqty.bind(this, product, 0)}>-</button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger btn-sm"
                                                onClick={deleteCart.bind(this, product.id, product.name)}>
                                                    <i className="fa fa-trash "></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                 <h1> </h1>
            </div>
        </div>
    )
}

export default Mycart;
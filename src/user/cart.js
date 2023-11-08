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
                    swal(pinfo.name+"", "Quantity updated in your cart.", "success");
                    getProduct();
                })
            } catch (error) {
                swal("Error", "While updating !", "warning");
            }
        } // else end here
    }

    let [fullname, pickName] = useState("");
    let [mobileno, pickMobile] = useState("");
    let [fulladdress, pickAddress] = useState("");

    const placeorder = async () => {
        let orderdata = {
            customername : fullname, 
            mobile : mobileno, 
            address : fulladdress,
            item : allproduct
        };
       
        let url = 'https://1234-yashsharma32-ecommerce1-yzzh7hhgdye.ws-us106.gitpod.io/order';
        let postData = {
            headers : {'Content-Type' : 'application/json'},
            method : "POST",
            body : JSON.stringify(orderdata)
        }
        try{
            await fetch(url, postData)
            .then(response=>response.json())
            .then(serverRes=>{
                swal("Order Received", "Your Order id -: "+serverRes.id, "success" );
                pickName(""); pickMobile(""); pickAddress(""); updateProduct([]);
            })
        }
        catch(error){
            swal("error", "Unalble to place order.", "error");
        }
    }

    let total = 0;

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4 mb-5">
                    <div className="p-5 shadow-lg rounded">
                        <h3 className="text-center text-primary">Enter Customer Details</h3>
                        <div className="mb-3">
                            <label>Customer Name</label>
                            <input type="text" className="form-control"
                            onChange={obj=>pickName(obj.target.value)} value={fullname}/>
                        </div>
                        <div className="mb-3">
                            <label>Mobile No</label>
                            <input type="text" className="form-control" 
                            onChange={obj=>pickMobile(obj.target.value)} value={mobileno}/>
                        </div>
                        <div className="mb-3">
                            <label>Delivery Address</label>
                            <textarea className="form-control" 
                            onChange={obj=>pickAddress(obj.target.value)} value={fulladdress}></textarea>
                        </div>
                        <div className="text-center">
                            <hr/>
                            <button className="btn btn-danger btn-lg" onClick={placeorder}>Place Order</button>
                        </div>
                    </div>
                </div>
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
                                <th>Total Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allproduct.map((product, index) => {
                                    total = total + (product.qty * product.price);
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
                                            <td>Rs. {product.qty * product.price}</td>
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
                            <tr>
                                <td colspan="5" className="text-end">
                                    <b> Grand Total : Rs.{total} </b>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Mycart;
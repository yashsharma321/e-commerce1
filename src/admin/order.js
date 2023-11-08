import { useState, useEffect } from "react"; 

 const Myorder = () =>{
    let sellerid = localStorage.getItem("sellerid");
    let [orderlist, updateOrder] = useState([]);
    const getOrder = () => {
        let url = 'https://1234-yashsharma32-ecommerce1-yzzh7hhgdye.ws-us106.gitpod.io/order';
        fetch(url)
        .then(response=>response.json())
        .then(orderArray=>{
            updateOrder(orderArray.reverse());
        })
    }

    useEffect(()=>{
        getOrder();
    },[1]);
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="text-center text-info">My Orders : {orderlist.length}</h2>
                </div>
            </div>
            {
                orderlist.map((order, index)=>{
                    return(
                        <div className="row mb-5" key={index}>
                            <div className="col-lg-8">
                                {/* <h1>Hari bol</h1> */}
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#Pid</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Photo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            order.item.map((item, index2)=>{
                                                return(
                                                    <tr key={index2}>
                                                        <td>{item.id}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.price}</td>
                                                        <td>{item.qty}</td>
                                                        <td>{item.price * item.qty}</td>
                                                        <td><img src={item.photo} height="30" width="50"/> </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-lg-4">
                                <div className="p-4 border">
                                    <h4 className="text-center"> Customer Details </h4>
                                    <p> Full Name : {order.customername} </p>
                                    <p> Mobile No : {order.mobile} </p>
                                    <p> Delivery Address : {order.address} </p>
                                
                                </div> 
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
 }

 export default Myorder;
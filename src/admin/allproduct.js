import { useEffect, useState } from "react"; 

 const Myproduct = () =>{
    let[allproduct, updateProduct] = useState([]);
    const getProduct = () => {
        let url = "https://1234-yashsharma32-ecommerce1-yzzh7hhgdye.ws-us105.gitpod.io/product";
        fetch(url)
        .then(response=>response.json())
        .then((productArray)=>{
            updateProduct(productArray.reverse())
        })
    }

    useEffect(()=>{
        getProduct()
    }, [1]);

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-8">
                    <h3 className="text-primary text-center"> Product List </h3>
                </div>
                <div className="col-lg-4">
                    <i>Search..</i>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-lg-12 mt-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#Id</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Details</th>
                                <th>Photo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allproduct.map((product, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.details}</td>
                                            <td><img src={product.photo} height="50" width="70"/></td>
                                            <td>
                                                <button className="btn btn-danger btn-sm">
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
 }

 export default Myproduct;
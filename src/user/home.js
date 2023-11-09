import { useState, useEffect } from "react";
import swal from "sweetalert";

const Myhome =  () => {
    const [allproduct, updateProduct]= useState([]);
    const getProduct = async() => {
        let url = 'https://1234-yashsharma32-ecommerce1-yzzh7hhgdye.ws-us106.gitpod.io/product';
        await fetch(url)
        .then(response=>response.json())
        .then(productsArray=>{
            updateProduct(productsArray.reverse());
        })
    }
    useEffect(()=>{
        getProduct();
    },[1]);

    const addtocart = async(pinfo) => {
        pinfo["qty"] = 1; 
        let url = 'https://1234-yashsharma32-ecommerce1-yzzh7hhgdye.ws-us106.gitpod.io/cart';
        var postData = {
            headers : {'Content-Type': 'application/json'},
            method : "POST",
            body : JSON.stringify(pinfo) 
        }
        try {
            await fetch(url, postData)
            .then(response=>response.json())
            .then(serRes=>{
                swal(pinfo.name+"","Added in your cart.", "success");
            })
        } catch (error) {
            swal("Error", pinfo.name+" Already in your cart.", "warning");
        }
    }

    return(
        <div className="container mt-5">
              <div className='row'>
                <div className='col-lg-12 mt-3'>                  
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-1-img.png" width="800" height="650" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-2-img.png" width="800" height="650" alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-3-img.png" width="800" height="650" alt="Third slide"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
            </div>
            
            <div className="row text-center">
               {
                    allproduct.map((product, index)=>{
                        return(
                            <div className="col-lg-3 mb-5" key={index}>
                                <div className="p-4 shadow-lg rounded">
                                    <h4 className="text-primary mb-3"> {product.name} </h4>
                                    <img src={product.photo} width="100%" height="200" className="rounded" />
                                    <p className="m-2 text-danger"><b>Rs. {product.price}</b></p>
                                    <button className="btn btn-danger btn-sm" 
                                    onClick={addtocart.bind(this, product)}>
                                        <i className="fa fa-plus"></i> Add to Cart 
                                    </button>
                                    <p className="m-2">{product.details.substring(0,30)}... </p>
                                </div>
                            </div>
                        )
                    })
               }
            </div>
        </div>
       
    )
}

export default Myhome;
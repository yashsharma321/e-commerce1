import { useState } from "react"; 
import { json } from "react-router-dom";
import swal from "sweetalert";

 const Mynewproduct = () =>{
    let[pname, pickName] = useState("");
    let[pprice, pickPrice] = useState("");
    let[pphoto, pickPhoto] = useState("");
    let[pdetails, pickDetails] = useState("");

    let[errorList, updateError] = useState({nameerror: "", priceerror:"",photoerror: "", detailserror:""});

    const save = () => {

        // price check
        if( isNaN(parent(pprice))) {
            errorList[0].priceerror = "Invalid Photo URL";
            formstatus = false;
        } else {
            errorList[0].priceerror = "";
        }

        // photo url check
        if(pphoto == ""){
            errorList[0].photoerror = "Invalid Photo URL";
            formstatus = false;
        } else {
            errorList[0].photoerror = "";
        }

        // details check
        if(pdetails == ""){
            errorList[0].detailserror = "Enter Product Details!";
            formstatus = false;
        } else {
            errorList[0].detailserror = "";
        }




        let formstatus = true;
        if(pname==""){
            errorList.nameerror = "Invalid Name!";
            formstatus = false;
        } else {

            


            errorList.nameerror="";
        }
        
        
        updateError(errorList = [...errorList]);
        if(formstatus == false){
            swal("Error", "Enter Product Details", "warning");
        } else {

            let url = "http://localhost:1234/product";
            let newproduct = {
                name: pname,
                price: pprice,
                photo: pphoto,
                details: pdetails,
                sellerid: localStorage.getItem("sellerid")
            }

            let postdata = {
                headers : {'Content-Type' : 'application/json'},
                method : 'POST',
                body : JSON.stringify(newproduct)
            }

            fetch(url, postdata)
            .then(response=>response.json())
            .then(serRes=>{
                swal(pname+"", " Save Successfully ", "success");
                pickName(""); pickDetails(""); pickPhoto(""); pickPrice("");
            })

            alert("Please wait saving...");
        }
    }


    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <h3 className='text-center text-primary'> Enter Product Details </h3>
                    <i className="text-danger">All Fields are Mandatory!</i>
                    <div className="row mt-3 mb-4">
                        <div className="col-lg-6">
                            <label>Enter Product Name</label>
                            <input type="text" className="form-control"
                            onChange={(obj)=>pickName(obj.target.pname)} value={pname} />
                            <i className="text-danger">{errorList[0].nameerror}</i>
                        </div>
                        <div className="col-lg-6">
                            <label>Enter Product Price</label>
                            <input type="number" className="form-control"
                            onChange={(obj)=>pickPrice(obj.target.pprice)} value={pprice} />
                        </div>
                    </div>
                    
                    <div className="row mb-4">
                        <div className="col-lg-12">
                            <label>Enter Product Photo URL</label>
                            <input type="number" className="form-control"
                            onChange={(obj)=>pickPhoto(obj.target.pphoto)} value={pphoto} />
                        </div>
                    </div>
                    
                    <div className="row mb-4">
                        <div className="col-lg-12">
                            <label>Enter Product Details</label>
                            <textarea className="form-control" onChange={(obj)=>pickDetails(obj.target.pdetails)} value={pdetails} ></textarea>
                        </div>
                    </div>

                    <div className="text-center">
                        <button className="btn btn-danger"> Update Product </button>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    )
 }

 export default Mynewproduct;
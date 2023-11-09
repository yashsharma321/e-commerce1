import { HashRouter, Routes, Route } from "react-router-dom";

import Userheader from "./userheader";
import Myregister from "./register";
import Mylogin from "./login";
import Mycart from "./cart";
import Myhome from "./home";
import Footer from "./footer";

const UserModule = () =>{
    return(
        <HashRouter>
            <Userheader />
            {/* <h1>Jai Shree Ram</h1> */}
            <Routes>
                <Route exact path='/' element= {<Myhome />} />
                <Route exact path='/register' element= {<Myregister />} />
                <Route exact path='/login' element= {<Mylogin />} />
                <Route exact path='/cart' element= {<Mycart />} />
                <Route exact path='/home' element= {<Myhome />} />
            </Routes>
            <Footer />
        </HashRouter>
    )
}

export default UserModule;
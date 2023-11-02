import {Link} from 'react-router-dom';

const Adminheader = () =>{
    return(
        <ul>
            <li><Link to='/'>Dashboard</Link></li>
            <li><Link to='/addproduct'>New Product</Link></li>
            <li><Link to='/productlist'>All Product</Link></li>
            <li><Link to='/orderlist'>All Orders</Link></li>
            <li> <a>Welcome - Alex - Logout</a> </li>
        </ul>
    )
}

export default Adminheader;
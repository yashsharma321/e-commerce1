import {Link} from 'react-router-dom';

const Userheader = () =>{
    return(
        <ul>
            <li><Link to='/'>Shopping</Link></li>
            <li><Link to='/cart'>My Cart</Link></li>
            <li><Link to='/register'>Create Account</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
    )
}

export default Userheader;
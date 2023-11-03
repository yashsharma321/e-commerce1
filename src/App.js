import UserModule from "./user/userapp";
import SellerModule from "./admin/adminapp";

function App() {
  let login = false;
  if (localStorage.getItem("sellerid") == null){
    return(<UserModule />)
  }  
  else {
    return (<SellerModule />)
  } 
}

export default App;

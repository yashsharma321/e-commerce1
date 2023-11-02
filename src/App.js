import UserModule from "./user/userapp";
import SellerModule from "./admin/adminapp";

function App() {
  let login = true;
  if(login)  return (<SellerModule />)
  else return ( <UserModule />)
}

export default App;

import Sidebar from "./common_components/Sidebar";
import SignIn from "./common_components/SignIn";
import SignUp from "./common_components/signup";
import { sideBarBotNav, sideBarTopNav } from "./constants/sidebar";


function App() {
  
  return (
  <div>
    <Sidebar topnav={sideBarTopNav} botnav={sideBarBotNav}></Sidebar>
  </div>
  );
}

export default App;

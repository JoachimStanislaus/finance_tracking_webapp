import AgGridExample from "./common_components/Grid";
import Sidebar from "./common_components/Sidebar";
import SignIn from "./common_components/SignIn";
import SignUp from "./common_components/signup";
import { sideBarBotNav, sideBarTopNav } from "./constants/sidebar";


function App() {
  
  return (
    
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
    <div style={{ width: "140px" }}>
      <Sidebar topnav={sideBarTopNav} botnav={sideBarBotNav} />
    </div>
    <div style={{ flex: 1 }}>
      <AgGridExample />
    </div>
  </div>
  );
    
}

export default App;

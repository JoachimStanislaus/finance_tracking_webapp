import SignIn from "./common_components/SignIn";
import SignUp from "./common_components/signup";

import SideMenu from "./common_components/SideMenu";
import AgGridExample from "./components/ExpensesGrid";

function App() {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
    <SideMenu />
    <div style={{ flex: 1, padding: "1rem", height: "100%" }}>
      <AgGridExample />
    </div>
  </div>
  );
}

export default App;

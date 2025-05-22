import Sidebar from "./common_components/Sidebar";
import SignIn from "./common_components/SignIn";
import SignUp from "./common_components/signup";
import { SidebarItem } from "./types/Sidebar.types";


function App() {
  const items: SidebarItem[] = [
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Users', path: '/users' },
  ];
  return (
  <div>
    <Sidebar items={items}></Sidebar>
  </div>
  );
}

export default App;

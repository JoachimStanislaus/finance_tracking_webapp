import SignIn from "./common_components/SignIn";
import SignUp from "./common_components/SignUp";
import Dashboard from "./components/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateExpense from "./common_components/CreateExpense";
import CreateExpenseTest from "./common_components/CreateExpenseTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/expenses" element={<CreateExpenseTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

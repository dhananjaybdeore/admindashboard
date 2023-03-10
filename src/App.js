import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewUser from "./pages/newUser/NewUser";
function App() {
  return (
    <Router className="App">
      <Topbar />
      {/* <UserList /> */}
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {/* <Route  path="/users" element={<UserList />}> */}
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/user/:userId" element={<User />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { Route, Routes, Navigate , BrowserRouter as Router} from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Forget from "./components/Forget";
import Change from "./components/Change"
function App() {
	// const user = localStorage.getItem("token");

	return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/forget" exact element={<Forget />} />
        <Route path="/change" exact element={<Change />} />
      </Routes>
    </Router>
  );
}

export default App;
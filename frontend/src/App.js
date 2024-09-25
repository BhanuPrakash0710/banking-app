import Navbar from "./components/Navbar/Navbar.jsx"
import Main from "./components/Main/Main.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Transaction from "./components/Transaction/Transaction.jsx";
import History from "./components/History/History.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleTransfer from "./components/SingleTransfer/SingleTransfer.jsx";
import Register from "./components/Register/Register.jsx"
import Login from "./components/Login/Login.jsx";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/home" element={<Main/>}/>
          <Route path="/transaction" element={<Transaction/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/SingleTransfer/:id" element={<SingleTransfer/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;

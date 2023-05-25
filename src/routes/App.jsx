import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "../pages/Home/Home.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import MyAccount from "../pages/MyAccount/MyAccount.jsx";
import MyOrders from "../pages/MyOrders/MyOrders.jsx";
import SignIn from "../pages/SignIn/SignIn.jsx";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/my-account" element={<MyAccount />} />
            <Route exact path="/my-orders" element={<MyOrders />} />
            <Route exact path="/sign-in" element={<SignIn />} />
            <Route exact path="/*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

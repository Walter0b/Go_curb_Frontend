import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Customers from "./components/Customers";
import Invoices from "./components/Invoices";
import Payments from "./components/Payments";

function App() {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<Invoices/>}></Route>
            <Route path='/Customers' element={<Customers/>}></Route>
            <Route path='/Invoices' element={<Invoices/>}></Route>
            <Route path='/Payments' element={<Payments/>}></Route>
        </Routes>
    </div>
  );
}

export default App;

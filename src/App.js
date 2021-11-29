import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

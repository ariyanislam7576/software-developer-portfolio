import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import SingleProject from './Pages/SingleProject/SingleProject';
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/Home/Footer/Footer';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
        <Routes>
          <Route path='/blog' element={<Blog></Blog>}></Route>
        </Routes>
        <Routes>
          <Route path='/projects/:id' element={<SingleProject></SingleProject>}></Route>
        </Routes>
       <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;

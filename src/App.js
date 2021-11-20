import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Cart from './pages/Cart';
//import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';



function App() {
  //return <h1>Hello from coders gyan</h1>;
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/*<Route path="/about" element={<About />}></Route>*/}
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </>
  );
}


export default App;
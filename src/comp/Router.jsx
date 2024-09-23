import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';

const AppRoutes = ({shop, Filter, allcatefilter, addtocart, cart, setCart}) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home addtocart={addtocart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/shop" element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

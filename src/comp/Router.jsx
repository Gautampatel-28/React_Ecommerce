
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';

const Router = ({shop,Filter, allcatefilter, addtocart, cart, setCart}) => {
  return (
    <>
      <Routes>
        <Route path="/React_Ecommerce" element={<Home addtocart={addtocart}/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/shop" element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart} /> } />
        <Route path="/Contact" element={<Contact /> } />
      </Routes>
    </>
  );
};

export default Router;

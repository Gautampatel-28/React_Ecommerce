import { useState } from 'react';
import Nav from './comp/Nav/Nav';
import { BrowserRouter } from 'react-router-dom';
import Router from './comp/Router';
import Footer from './comp/Footer/Footer';
import Homeproduct from './comp/data/HomeProduct';

const App = () => {
  // Add To cart
  const [cart, setCart] = useState([]);
  // Shop Page product
  const [shop, setShop] = useState(Homeproduct);
  // Shop Search Filter
  const [search, setSearch] = useState('');

  // Shop category filter
  const Filter = (x) => {
    const catefilter = Homeproduct.filter((product) => {
      return product.cat === x;
    }); 
    setShop(catefilter);
  };

  const allcatefilter = () => {
    setShop(Homeproduct);
  };

  // Shop Search Filter
  const searchlength = (search || []).length === 0;
  const searchproduct = () => {
    if (searchlength) {
      alert('Please Search Something !');
      setShop(Homeproduct);
    } else {
      const searchfilter = Homeproduct.filter((x) => {
        return x.cat === search;
      });
      setShop(searchfilter);
    }
  };

  // Add To cart
  const addtocart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist) {
      alert('This product is already added to cart');
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert('Added To cart');
    }
  };

  console.log(cart);

  return (
    <BrowserRouter>
      <Nav
        search={search}
        setSearch={setSearch}
        searchproduct={searchproduct}
      />
      <Router
        setCart={setCart}
        cart={cart}
        shop={shop}
        Filter={Filter}
        allcatefilter={allcatefilter}
        addtocart={addtocart}
      />
      <Footer />
    </BrowserRouter>
  );
};

export default App;

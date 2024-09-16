import { useEffect } from 'react';
import "../Cart/Cart.css";
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const Cart = ({ cart, setCart }) => {
  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);

  // Increase Quantity of cart product
  const incqty = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    setCart(
      cart.map((curElm) =>
        curElm.id === product.id
          ? { ...exist, qty: exist.qty + 1 }
          : curElm
      )
    );
  };

  // Decrease Quantity of cart product
  const decqty = (product) => { 
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      removeproduct(product);
    } else {
      setCart(
        cart.map((curElm) =>
          curElm.id === product.id
            ? { ...exist, qty: exist.qty - 1 }
            : curElm
        )
      );
    }
  };
//Remove the product
  const removeproduct = (product) => {
    setCart(cart.filter((curElm) => curElm.id !== product.id));
  };

  // Ensure qty and price are numbers
  const total = cart.reduce((price, item) => {
    const itemPrice = parseFloat(item.price.replace(/,/g, ''));
    const itemQty = parseInt(item.qty, 10);
    return price + (itemQty * itemPrice);
  }, 0);
  const thankout = () => {
    alert('Thanks for Shopping ! Visit Again !.');
  };

  return (
    <>
      <div className="cart">
        <h3>#cart</h3>
        <div className="container">
          {cart.length === 0 && (
            <div className="empty_cart">
              <h2>Your Shopping cart is empty</h2>
              <Link to="/shop">
                <button>Shop Now</button>
              </Link>
            </div>
          )}
          <div className="container">
            {cart.map((curElm) => (
              <div className="box" key={curElm.id}>
                <div className="img_box">
                  <img src={curElm.image} alt="pic" />
                </div>
                <div className="detail">
                  <div className='info'>
                    <h4>{curElm.cat}</h4>
                    <h3>{curElm.Name}</h3>
                    <p>Price: ₹{parseFloat(curElm.price.replace(/,/g, ''))}</p>
                    <p>Total: ₹{parseFloat(curElm.price.replace(/,/g, '')) * parseInt(curElm.qty, 10)}</p>
                  </div>
                  <div className='quantity'>
                    <button onClick={() => incqty(curElm)}>+</button>
                    <input type='number' readOnly value={curElm.qty} />
                    <button onClick={() => decqty(curElm)}>-</button>
                  </div>
                  <div className="icon">
                    <li onClick={() => removeproduct(curElm)}><AiOutlineClose /></li>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='bottom'>
            {cart.length > 0 && (
              <>
                <div className='Total'>
                  <h4>Sub Total: ₹{total}</h4>
                </div>
                <button onClick={thankout}>checkout</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

import { useEffect, useState } from 'react';
import "../Home/Home.css"
import { Link } from 'react-router-dom';
import Homeproduct from "../data/HomeProduct";
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";

const Home = ({ addtocart }) => {
  const backgroundImageUrl = `${import.meta.env.BASE_URL}image/slide-1.webp`;
  // Product categories
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturdProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  // Trending Products
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);

  // Filter of trending products
  const filtercate = (x) => {
    const filterproduct = Homeproduct.filter((curElm) => curElm.type === x);
    setTrendingProduct(filterproduct);
  };

  // All Trending Products
  const allTrendingProduct = () => {
    setTrendingProduct(Homeproduct);
  };

  // Product Type
  useEffect(() => {
    productcategory();
  }, []); // Empty dependency array

  const productcategory = () => {
    // New Product
    const newcategory = Homeproduct.filter((x) => x.type === 'new');
    setNewProduct(newcategory);

    // Featured Product
    const featuredcategory = Homeproduct.filter((x) => x.type === 'featured');
    setFeaturdProduct(featuredcategory);

    // Top Product
    const topcategory = Homeproduct.filter((x) => x.type === 'top');
    setTopProduct(topcategory);
  };



  return (
    <>
      <div className='home'>
      <div
        className='top_banner'
        style={{
          maxWidth: '100%',
          height: '395px',
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          padding: '50px 60px',
        }}
      >
          <div className='contant'>
            <h3>silver aluminum</h3>
            <h2>Apple Watch</h2>
            <p>30% off at your first order</p>
            <Link to='/shop' className='link'>Shop Now</Link>
          </div>
        </div>
        <div className='trending'>
          <div className='container'>
            <div className='left_box'>
              <div className='header'>
                <div className='heading'>
                  <h2 onClick={() => allTrendingProduct()}>trending product</h2>
                </div>
                <div className='cate'>
                  <h3 onClick={() => filtercate('new')}>New</h3>
                  <h3 onClick={() => filtercate('featured')}>Featured</h3>
                  <h3 onClick={() => filtercate('top')}>Top selling</h3>
                </div>
              </div>
              <div className='products'>
                <div className='container'>
                  {
                    trendingProduct.map((curElm) => (
                      <div className='box' key={curElm.id}>
                        <div className='img_box'>
                          <img src={curElm.image} alt={curElm.Name} />
                          <div className='icon'>
                            <div className='icon_box'>
                              <AiFillEye />
                            </div>
                            <div className='icon_box'>
                              <AiFillHeart />
                            </div>
                          </div>
                        </div>
                        <div className='info'>
                          <h3>{curElm.Name}</h3>
                          <p>₹{curElm.price}</p>
                          <button className='btn' onClick={() => addtocart(curElm)}>Add to cart</button>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <button>Show More</button>
              </div>
            </div>
            <div className='right_box'>
              <div className='right_container'>
                <div className='testimonial'>
                  <div className='head'>
                    <h3>Our Testimonial</h3>
                  </div>
                  <div className='detail'>
                    <div className='img_box'>
                    <img src={`${import.meta.env.BASE_URL}image/DP.png`} alt='testimonial' />
                    </div>
                    <div className='info'>
                      <h3>Gautam Patel</h3>
                      <h4>Developer</h4>
                      <p>Our E-commerce platform has greatly improved our website performance and User Experience..</p>
                    </div>
                  </div>
                </div>
                <div className='newsletter'>
                  <div className='head'>
                    <h3>Newsletter</h3>
                  </div>
                  <div className='form'>
                    <p>Join our mailing list</p>
                    <input type='email' placeholder='E-mail' autoComplete='off' />
                    <button>Subscribe</button>
                    <div className='icon_box'>
                      <div className='icon'>
                        <BiLogoFacebook />
                      </div>
                      <div className='icon'>
                        <BiLogoTwitter />
                      </div>
                      <div className='icon'>
                        <BiLogoInstagram />
                      </div>
                      <div className='icon'>
                        <BiLogoYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='banners'>
          <div className='container'>
            <div className='left_box'>
              <div className='box'>
              <img src={`${import.meta.env.BASE_URL}image/Multi-Banner-1.webp`} alt='banner1' />
              </div>
              <div className='box'>
                <img src={`${import.meta.env.BASE_URL}image/Multi-banner-2.webp`}alt='banner2' />
              </div>
            </div>
            <div className='right_box'>
              <div className='top'>
                <img src={`${import.meta.env.BASE_URL}image/Multi-Banner-3.webp`} alt='banner3' />
                <img src={`${import.meta.env.BASE_URL}image/Multi-banner-4.webp`}alt='banner4' />
              </div>
              <div className='bottom'>
                <img src={`${import.meta.env.BASE_URL}image/Multi-Banner-5.webp`} alt='banner5' />
              </div>
            </div>
          </div>
        </div>
        <div className='product_type'>
          <div className='container'>
            <div className='box'>
              <div className='header'>
                <h2>New Product</h2>
              </div>
              {
                newProduct.map((curElm) => (
                  <div className='productbox' key={curElm.id}>
                    <div className='img-box'>
                      <img src={curElm.image} alt={curElm.Name} />
                    </div>
                    <div className='detail'>
                      <h3>{curElm.Name}</h3>
                      <p>₹{curElm.price}</p>
                      <div className='icon'>
                        <button><AiFillEye /></button>
                        <button><AiFillHeart /></button>
                        <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Featured Product</h2>
              </div>
              {
                featuredProduct.map((curElm) => (
                  <div className='productbox' key={curElm.id}>
                    <div className='img-box'>
                      <img src={curElm.image} alt={curElm.Name} />
                    </div>
                    <div className='detail'>
                      <h3>{curElm.Name}</h3>
                      <p>₹{curElm.price}</p>
                      <div className='icon'>
                        <button><AiFillEye /></button>
                        <button><AiFillHeart /></button>
                        <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Top Product</h2>
              </div>
              {
                topProduct.map((curElm) => (
                  <div className='productbox' key={curElm.id}>
                    <div className='img-box'>
                      <img src={curElm.image} alt={curElm.Name} />
                    </div>
                    <div className='detail'>
                      <h3>{curElm.Name}</h3>
                      <p>₹{curElm.price}</p>
                      <div className='icon'>
                        <button><AiFillEye /></button>
                        <button><AiFillHeart /></button>
                        <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

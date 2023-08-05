import React, { useEffect, useState } from "react";
import { products } from "../data";
import Colors from "../components/colors";
import "../nav.css"
import "./product_page.css";
import { toast } from "react-toastify";
import Rating from "../components/Rating";
import Logo from "../images/Logo.png"



const allColors = ["All", ...new Set(products.map((product) => product.color))];

// alert messages

const notify = () =>
  toast.success("Your product has been added to the cart!", {
    position: "bottom-center",
    autoClose: 5000,
    closeOnClick: true,
    theme: "light",
  });

const Shop = () => {
  const [res, setRes] = useState(products);

  // filter by category

  const filterType = (category) => {
    setRes(
      products.filter((item) => {
        return item.category === category;
      })
    );
  };

  // filter by color

  const [buttons, setButtons] = useState(allColors);
  const filterColor = (button) => {
    if (button === "All") {
      setRes(products);
      return;
    }
    const filteredData = products.filter((product) => product.color === button);
    setRes(filteredData);
  };

  // sorting

  const setLowToHigh = () => {
    const sortedProducts = slice.sort((a, b) => a.price - b.price);
    setRes([...sortedProducts]);
  };
  const setHighToLow = () => {
    const reverseSortedProducts = slice.sort((a, b) => b.price - a.price);
    setRes([...reverseSortedProducts]);
  };
  const aazz = () => {
    const sortedbyName = slice.sort((a, b) => a.productName.localeCompare(b.productName));
    console.log(sortedbyName)
    setRes([...sortedbyName]);

  };
  const zzaa = () => {
    const reversesortedbyName = slice.sort((a, b) => b.productName.localeCompare(a.productName));
    setRes([...reversesortedbyName]);
  };

  // price Range
  const [upperLimit, setUpperLimit] = useState();
  const [lowerLimit, setLowerLimit] = useState();

  const submitButton = () => {
  const filteredData = slice.filter(
      (item) =>
      item.price >= (lowerLimit || 0) &&
      item.price <= (upperLimit || Infinity)
  );
  setRes(filteredData);
  console.log(filteredData)
  };

  // Load More
  const [noOfElement, setnoOfElement] = useState(6);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };
  const slice = res.slice(0, noOfElement);

  // responsive Menu

  window.onload=function() {
    const responsiveMenuButton = document.getElementById('responsiveMenu');
        
    const navBarLinks = document.querySelector('.navbar-links')
    
    responsiveMenuButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('open');
    responsiveMenuButton.classList.toggle('open');
    });
    
    const allNavLinks = document.querySelectorAll('navbar-links li');
    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            navBarLinks.classList.remove('open');
            responsiveMenuButton.classList.remove('open');
        })
    });
    }


  return (
    <>  
        <header>
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="logo"></img>
            </div>
            <button aria-label="toggle menu" id="responsiveMenu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="openIcon">
                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="closeIcon">
            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>
            </button>
            <div className="navbar-links">
            <ul className="nav-menu">
                <li className="navItem"><a onClick={() => setRes(products)} >All</a></li>
                <li className="navItem"><a onClick={() => filterType("Electronics")}>Electronics</a></li>
                <li className="navItem"><a onClick={() => filterType("Furniture")}>Furniture</a></li>
                <li className="navItem"><a onClick={() => filterType("Clothes")}>Clothes</a></li>
            </ul>
            </div>
        </nav>
        </header>
        <div className="sidebarContainer">
        <Colors button={buttons} filter={filterColor} />
        <div className="priceFilter">
          <h4>Filter by price:</h4>
        <div className="inputs">
        <input 
          className="priceInput"
          placeholder="min price"
          value={lowerLimit}
          onChange={(e) => setLowerLimit(e.target.value)}
        />
        </div>
        <br />
        <div className="inputs">
        <input
          className="priceInput"
          placeholder="max price"
          value={upperLimit}
          onChange={(e) => setUpperLimit(e.target.value)}
        />
        </div>
            <button className="pricebtn" onClick={submitButton}>Filter</button>
        </div>
        </div>
        <div>
        <h2 className="shopName">Shop</h2>
        <h4 className="counter">
          Showing {slice.length} from {products.length} results:
        </h4>
        <div className="sorting">
        <button className="btnsort" onClick={setLowToHigh}>Price Asc</button>
        <button className="btnsort" onClick={setHighToLow}>Price Desc</button>
        <button className="btnsort" onClick={aazz}>Product A-Z</button>
        <button className="btnsort" onClick={zzaa}>Product Z-A</button>
        </div>
        </div>
      <div className="product_page">
        <div className="products">
          {" "}
          {slice.map((item, index) => (
            <div key={index} className="product">
              <img src={item.productImage} alt="item.productName" />
              <div className="desc">
                <p>
                  <b>{item.productName}</b>
                </p>
                <p>${item.price}</p>
                <p className="productdesc">{item.productDesc}</p>
                <div className="productRating">
                  <Rating value={item.rating} text={`${item.numReviews} reviews`}/>
                </div>
              </div>
              <button className="addToCartBttn" onClick={notify}>
                {" "}
                Buy{" "}
              </button>
            </div>
          ))}
        </div>
        <div className="loadMore">
          <button onClick={() => loadMore()}> Load More </button>
        </div>
      </div>
    </>
  );
};

export default Shop;

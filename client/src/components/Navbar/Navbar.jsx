import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
        <div className="item">
            <Link className ="link" to="/">Home
          </Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/1">Products
          </Link>
          </div>
        </div>
        <div className="center">
          <Link className ="link" to="/">AM MOTORS</Link>
        </div>
        <div className="right">
          <div className="icons">
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;

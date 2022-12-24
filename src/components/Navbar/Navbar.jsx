import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import PersonOutline from '@mui/icons-material/PersonOutline';
import Search from '@mui/icons-material/Search';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import "./Navbar.scss"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="/img/en.png" alt="" />
                        <KeyboardArrowDown />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDown />
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/1">Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/3">Children</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className='link' to="/">MEGASTORE</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className='link' to="/">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <Search/>
                        <PersonOutline/>
                        <FavoriteBorder/>
                        <div className="cartIcon" onClick={()=>setOpen(!open)}>
                            <ShoppingCartOutlined/>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart/>}
        </div>
    );
}

export default Navbar;

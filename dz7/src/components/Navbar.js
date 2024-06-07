import React from 'react';
import {Link} from "react-router-dom";
import CounterCart from "./CounterCart";


const Navbar = () => {
    return (
        <div className='div'>
            <Link to='/'>Товары</Link>
            <div style={{display:'flex', gap:'5px'}}>
                <Link to='/cart'>Корзина</Link><CounterCart/>
            </div>
        </div>
    );
};

export default Navbar;
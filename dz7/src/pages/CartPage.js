import React from 'react';
import {useSelector} from "react-redux";

const CartPage = () => {
    const goodInCard= useSelector(state => state.cart)
    return (
        <ul>
            {
                goodInCard.map(el => <div className='divs'>
                    <li>{el.title}</li>
                </div>)
            }
        </ul>
    );
};

export default CartPage;
import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider"

const CheckoutProduct = ({
    id,
    title,
    price,
    rating,
    image
}) => {
    const [{basket}, dispatch] = useStateValue();
const removeFromBasket = () =>{
    dispatch({
        type: "REMOVE_FROM_BASKET",
        id
    })
}

    return (
        <>
            <div className="checkoutProduct"
                key={id}>
                <img src={image}
                    alt="checkoutProduct_image"
                    className='checkoutProduct__image'/>
                <div className="checkoutProduct__info">
                    <p className='checkoutProduct__title'>
                        {title}</p>
                    <p className="checkoutProduct__price">
                        {price}$</p>
                    <div className="checkoutProduct__rating">
                        {Array(rating).fill().map((_,i)=>(
                            <p>⭐</p>
                        ))}
                    </div>
                    <button onClick={removeFromBasket}>Remove from basket</button>
                </div>

            </div>
        </>
    )
}

export default CheckoutProduct

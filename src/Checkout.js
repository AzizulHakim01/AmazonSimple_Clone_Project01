import React from 'react'
import './Checkout.css'
import Header from './Header'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'

const Checkout = () => {
    const [{basket}, dispatch] = useStateValue();
    return (
        <>
            <Header/>
            <div className="checkout">
                <div className="checkout__left">
                    <img src="/images/banner.jpg" alt="" className='checkout__ad'/>
                    <h2 className='checkout__title'>Your Product Basket</h2>
                    {
                        basket.map(item =>(
                            <CheckoutProduct id={item.id} image={item.image} title={item.title} price={item.price} rating={item.rating}/>
                        ))
                    }
                </div>
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            </div>
        </>
    )
}

export default Checkout

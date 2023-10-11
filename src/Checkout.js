import React from 'react'
import "./Checkout.css"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ user, basket }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>

                <div className='checkout_card'>
                    <h3> Hello {user?.email}</h3>
                    <h2 className='checkout__title'>
                        Shopping Cart with {basket?.length} items <ShoppingCartCheckoutIcon /> </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}


                        />

                    ))}

                </div>

            </div>
            <div className='checkout__right'>

                <Subtotal />

            </div>


        </div>
    )
}

export default Checkout

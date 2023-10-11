import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Subtotal() {
    const navigate = useNavigate(); // Use useNavigate for navigation
    const [{ basket }, dispatch] = useStateValue();

    // Check if basket length is zero, and return null if true
    if (basket.length === 0) {
        return null;
    }

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"Rs.  "}
            />
            <button onClick={() => navigate("/payment")} className='proceed_button'>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;


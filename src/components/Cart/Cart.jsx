import React from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import './Cart.scss'
import { useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer'
import { useDispatch } from 'react-redux'
import { loadStripe } from '@stripe/stripe-js'
import { makeRequest } from '../../makeRequest'

const Cart = () => {
  const dispatch = useDispatch()

  const products = useSelector((state) => state.cart.products)
  const totalPrice = () => {
    let total = 0
    products.forEach((item) => (total += item.quantity * item.price))
    return total.toFixed(2)
  }

  const stripePromise = loadStripe(
    'pk_test_51MZAieSCpLv4nDX9ZaZjEGuqyXEUHzdOWzhT7N1T65xemlFXyMICFqTSE2pGvIA4rgfysMcK7vWI0Uxt0X6aymBT00aRANvwbn'
  )

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise
      const res = await makeRequest.post('/orders', {
        products,
      })
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className='item' key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt='' />
          <div className='details'>
            <h3>{item.title}</h3>
            <p>{item.desc.substring(0, 30)}</p>
            <div className='price'>
              COST: {item.quantity} x ${item.price} ={' '}
              {item.quantity * item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className='delete'
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className='total'>
        <span>SUB TOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className='reset' onClick={() => dispatch(resetCart())}>
        RESET CART
      </span>
    </div>
  )
}

export default Cart

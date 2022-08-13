import { useContext } from 'react'

import Modal from '../UI/Modal'
import CartItem from './CartItem'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import { Link, NavLink } from 'react-router-dom'

const URL = 'http://localhost:4242/create-checkout-session'

const Cart = props => {
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id)
  }

  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  )

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {/* {hasItems && (
          <button className={classes.button}
            onClick={openInNewTab(URL)}>
            Order
          </button>
        )} */}

        {/* <Link to = '/success'>go</Link> */}
        {/* {hasItems && <Link className={classes.link} to={{pathname : URL}} target = "_blank">Order</Link>} */}
        { hasItems && <a href={URL} className={classes.link}>Order</a>}
      </div>
    </Modal>
  )
}

export default Cart

import Header from './Layout/Header'
import Meals from './Meals/Meals'
import Cart from './Cart/Cart'
import CartProvider from '../store/CartProvider'
import { useState } from 'react'
const Main = () => {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <div>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </div>
  )
}

export default Main

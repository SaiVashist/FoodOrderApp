import { useState } from 'react'

import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Success from './components/UI/Success'
import Main from './components/Main'

//project id food-order-app-c4ec4

function App () {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <div>
      <Route exact  path='/'>
        <Main />
      </Route>
      <Route path='/success'>
        <Success />
      </Route>
    </div>
  )
}

export default App

import { useState } from 'react'
import NavBar from './NavBar'
import HomePage from './HomePage'
import ShopPage from './ShopPage'

function App() {
  return (
    <>
      <div>
        <NavBar />
        <HomePage />
        <ShopPage />
      </div>
    </>
  )
}

export default App

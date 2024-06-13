import React from 'react'
import Not from '../../../public/not.jpg'

const CartContent = () => {
  return (
    <section className='cart-section'>
      <div className="container">
        <div className="cart-section__content">
          <img src={Not} width={700} height={500} />
        </div>
      </div>
    </section>
  )
}

export default CartContent

'use client'

import { useProducts } from "@/context/ProductContext";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
const {cart, handleIncrementProduct} = useProducts()
//const [value, setValue] = useState('');

  return (
    <section className="cart-section">
      <h2>Your cart</h2>
      {Object.keys(cart).length === 0 && (<p>You have no item in your cart!</p>)}

      <div className="cart-container">
        {Object.keys(cart).map((item, itemIndex) => {
          const itemData = cart[item]
          const itemQuantity = itemData?.quantity
          const imgName = itemData?.image_name
          const imgUrl = itemData?.image_url

          return (
            <div key={itemIndex} className="cart-item">
              <img src={imgUrl} alt={imgName + '-img'} />
              <div className="cart-item-info">
                <h3>{itemData.name}</h3>
                <p>{itemData.description.slice(0,100)}{itemData.description.length > 100
                ? '...' : ''}</p>
                <h4>${itemData.price_amount}</h4>
                <div className="quantity-container">
                  <p><strong>Quantity</strong></p>
                  <input type="number" value={itemQuantity} placeholder="2"
                  onChange={(e) => {
                    //setValue(e.target.value)
                    const newValue = e.target.value
                    handleIncrementProduct(itemData.priceId, newValue, itemData, true)
                  }} />
                </div>
              </div>
            </div>
          )

        })}
      </div>
    <div className="checkout-container">
      <Link href={'/'}>
         <button>&larr; Continue shopping</button>
      </Link>
      <button><a href="/paypalscript_buttonnew">Checkout &rarr;</a></button>
    </div>
    </section>
  );
}


"use client"

import React from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/store/hooks';
import { loadStripe } from '@stripe/stripe-js';
import { remove } from '@/lib/store/features/cart/cartSlice';


type CartItems = {
  id:string;
  name:string; 
  imageUrl:string; 
  price:number; 
}


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');


const CartPage = () => {
   const items  =  JSON.parse(localStorage.getItem('cartItems') || '[]');
  const cartItems = useAppSelector((state) => state.cart.items);
  console.log("cartItems from page : ", cartItems)
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (productId: number) => {
    
    dispatch(remove(productId));
  };



  return (
    <div>
      <h1>Shopping Cart</h1>
      {items.length > 0 ? (
        <ul className="grid grid-col-1 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <li key={item.id} className="border p-4 rounded-shadow h-70 flex flex-col items-center">
              <h2 className="font-semibold">{item.name}</h2>
              <img src={item.imageUrl} alt={item.name} className="mt-2 h-32 w-32 object-cover" />
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <button
                onClick={() => handleRemoveFromCart(item.id)}

                className="border-2 solid bg-gray-500"
              >
                Remove from cart
              </button>
              <button className="border-2 solid bg-gray-500 mt-2">
                order now
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;

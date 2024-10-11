'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { add } from '@/lib/store/features/cart/cartSlice';
import { createDynamicallyTrackedSearchParams } from 'next/dist/client/components/search-params';


interface Product{
    id:number; 
    name:string;
    description:string;
    imageUrl:string; 
    price:number;
  }

  interface CartItem {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
  }


  type propType = {product:Product}


const page = ({product}:propType) => {

 
    const [error, setError] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const dispatch = useAppDispatch(); 
    const [cartItems,setCartItems] = useState<CartItem[]>([]); 



    const handleAddToCart  =(product:Product)=>{
     
      const cartItem: CartItem = {
    ...product,
    price: product.price  
  };

  console.log("cartItems : ", cartItem); 
 dispatch(add(cartItem))
   

    }; 

    useEffect(() => {
      const fetchCartItems = () => {
          const storedCartItems = localStorage.getItem('cartItems');
          if (storedCartItems) {
              setCartItems(JSON.parse(storedCartItems));  
          }
      };
      fetchCartItems();  
  }, []);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        
        console.log('Fetched Products:', response.data); 
        setProducts(response.data.product);
      } catch (error) {
        console.error('Error fetching products:', error);
      
      }
    };
    fetchProduct();
  }, []);

  return (
    <div>
           <div>
      <h1>Product List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {products.length > 0 ? (
        <ul className='grid grid-col-1 md:grid-cols-2 gap-4'>
          {products.map((product) => (
            <li key={product.id} className='border p-4 rounded-shadow h-64 flex flex-col items-center'>
              <h2 className="font-semibold">{product.name}</h2>
              <img src={product.imageUrl} alt={product.name} className="mt-2 h-32 w-32 object-cover" />
              <h4>
                {product.description}
              </h4>

              <button  onClick={() => handleAddToCart(product)} className=' border-2 solid bg-gray-500'>
                Add to cart
              </button>
             
            </li>
          ))}
        </ul>
      ) : (
        <p>loading...</p>
      )}
    </div>

    </div>
  )
}

export default page
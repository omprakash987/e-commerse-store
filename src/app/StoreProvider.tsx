"use client"

import { Provider } from "react-redux"
import { Store } from "@reduxjs/toolkit"

import React, { ReactNode, useRef } from "react"
import { AppStore, makeStore } from "@/lib/store/store"
import { add } from "@/lib/store/features/cart/cartSlice"

const StoreProvider = ({children}:{children:ReactNode})=>{

    const storeRef = useRef<AppStore>(); 
    if(!storeRef.current){
        storeRef.current = makeStore(); 
        
    }
    

    return <Provider store={storeRef.current}>

        {children}

    </Provider>

}

export default StoreProvider; 

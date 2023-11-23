import React,{createContext, useState} from 'react'
import {createClient} from 'contentful'
const context = createContext();

export default function Provider({children}) {
    const client =  createClient({
        space:'t0pszie0jiqu',
        accessToken:'bm2qgxL1ruXxTPkEQT0KgtAuHOwVxlOzOuj-AoNo-AM',
      });
    return (
      <context.Provider value={{ 
        client:client
       }}>
       {children}
      </context.Provider>
    )
}

export {Provider, context}
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components'
import { BagItems } from '../components/BagItems'
import { Checkout } from '../components/Checkout'
import { LeftBar } from '../components/LeftBar'
import { Notfount } from '../components/Notfount'
import { Phones } from '../components/Phones'
import { Description } from '../components/PhonesComponent/Description'

export const Container = () => {
    const [cart, setCart] = useState([])

    const shopingCart = (product) => {
        const exist = cart.find(item => item.id === product.id)
        if ( exist ){
            setCart(cart.map(x => x.id === product.id ? {...exist, num: exist.num + 1} : x) )
        } else {
            setCart([...cart, {...product, num: 1}])
        }
    }

    const onRemove = ( product ) => {
        const exist = cart.find((x) => x.id === product.id)
        if(exist.num === 1){
            setCart(cart.filter((x) => x.id !== product.id))
        } else {
            setCart(
                cart.map((x) => 
                    x.id === product.id ? {...exist, num: exist.num - 1} : x
                )
            )
        }
    }

    return (
        <Wrapper>
            <LeftBar />
            <ToastContainer />
                
            <div className='cnt-flex'>
                <Routes>
                    <Route 
                        path='/product'
                        element={
                            <Phones
                                shopingCart={shopingCart} 
                                cart={cart}
                            />
                        } 
                    />
                    <Route path='/product/:id=:id' 
                        element={
                            <Description
                                cart={cart}
                                shopingCart={shopingCart} 
                            />
                        } 
                    />
                    <Route 
                        path='/bagitems' 
                        element={
                            <BagItems 
                                cart={cart} 
                                shopingCart={shopingCart} 
                                onRemove={onRemove}
                            />
                        } 
                    />
                    <Route 
                        path='/product/:id=:id/bagitems' 
                        element={
                            <BagItems 
                                cart={cart} 
                                shopingCart={shopingCart} 
                                onRemove={onRemove}
                            />
                        } 
                    />
					<Route 
                        path='/bagitems/checkout' 
                        element={
                            <Checkout 
                                cart={cart} 
                                shopingCart={shopingCart} 
                                onRemove={onRemove}
                            />
                        } 
                    />
                    <Route path='*' element={<Notfount />} />
                </Routes>
                
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .cnt_flex{
        display: flex;
    }
    .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
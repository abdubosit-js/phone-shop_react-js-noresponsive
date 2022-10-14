import React, { useState } from 'react'
import styled from 'styled-components'
import { products } from "../data/ProductArray"
import { Cart } from './Cart';
import { Phone } from './PhonesComponent/Phone';
import { SearchBar } from './PhonesComponent/SearchBar';

export const Phones = ({shopingCart, cart}) => {  

    const [search, setSearch] = useState("")

    const searchProducts = () => {
        const searchValue = search.toLowerCase()
        return products.filter((item) => item.name.toLowerCase().includes(searchValue))
    }

    return (
        <Wrapper>
            <div className="flex-cnt-ph">
                <div className="cnt-ph">
                    <SearchBar searchProducts={(val) => setSearch(val)}/>
                    <div className="phones-flex">
                        {searchProducts().map((product) =>
                            <Phone
                                key={product.id}
                                product={product}
                                shopingCart={shopingCart}
                            />
                        )}

                    </div>
                </div>
            </div>
            <Cart 
                cart={cart}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    .flex-cnt-ph{
        width: 70%;
        padding-left: 130px;
    }
    .phones-flex{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 48px;
    }
    .cnt-ph{
        width: 100%;
        padding-top: 20px;
        max-width: 953px;
        height: 99vh;
        overflow-y: scroll;
        ::-webkit-scrollbar {
            width: 4px;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: gray;
        }

    }
`
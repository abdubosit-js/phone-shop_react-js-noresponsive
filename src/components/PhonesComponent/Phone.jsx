import React from 'react'
import styled from 'styled-components'
import {ReactComponent as ShopBtn} from "../../assets/Button.svg"
import { NavLink } from 'react-router-dom'

export const Phone = ({product, shopingCart}) => {
    return (
        <Wrapper>
            <NavLink to={`/product/:id=${product.id}`}>
                <div className="img-cnt">
                    <img src={product.image} alt="" />
                </div>
            </NavLink>
            <div className="title-cnt">
                <h3>{product.name}</h3>
                <p>{product.color}</p>
                <div className='flex-btn'>
                    <b>$ {product.pice}</b>
                    <div className='shop-btn' onClick={() => shopingCart(product)}><ShopBtn /></div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .img-cnt{
        cursor: pointer;
        img {
            width: 100%;
            object-fit: cover;
        }
    }
    .flex-btn{
        display: flex;
        justify-content: space-between;
        margin-top: 21px;
        padding: 0 8px;
        b{
            font-family: 'Cabin';
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            color: #1A1F16;
        }
        .shop-btn{
            cursor: pointer;
        }
    }
    .title-cnt{
        max-width: 191px;

        padding: 0 8px;
        margin-top: 16px;
        h3{
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            color: #1A1F16;
        }
        p{
            margin-top: 7px;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: -0.02em;
            color: #60695C;
        }
    }
`
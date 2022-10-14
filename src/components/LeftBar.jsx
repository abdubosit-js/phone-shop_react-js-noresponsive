import React from 'react'
import styled from 'styled-components'
import {ReactComponent as HomeLogo}  from '../assets/Home.svg'
import {ReactComponent as Bag} from "../assets/Bag.svg"
import {ReactComponent as Out} from "../assets/Out.svg"
import { NavLink } from 'react-router-dom'

export const LeftBar = () => {
    
    const navLinks = [
        { 
           image: <HomeLogo/>,
           url: "/product"
        },
        {
            image: <Bag/>,
            url: "bagitems"
        }
    ]

    return (
        <Wrapper>
            <nav>
                <ul>
                    {navLinks.map((link, index) => 
                        <li key={index}>
                            <NavLink to={link.url}>
                                {link.image}
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
            <button><Out /></button>
        </Wrapper>
    )
}
    
const Wrapper = styled.div`
    width: 72px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    position: absolute;
    left: 16px;
    top: 1.56%;
    bottom: 1.56%;
    background: #FFFFFF;
    border-radius: 8px;
    li{
        margin-top: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
    }
    li:nth-child(2){
        margin-top: 40px;
    }
    button{
        margin-bottom: 16px;
        border: none;
        cursor: pointer;
        border-radius: 10px;
    }
    .active{
        border-radius: 11px;
        padding: 8px 10px;
        background: #1A1F16;
        svg{
            path {
            fill: #FFFFFF ;}
        }
        
    }
`   
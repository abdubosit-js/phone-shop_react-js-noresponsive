import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { StarRate } from './BagCopmponents/StarRate'
import {ReactComponent as Back} from "../assets/back.svg"
import { toast } from 'react-toastify'


export const Checkout = ({cart, onRemove, shopingCart}) => {
    const price = cart.reduce((a, s) => a + s.pice * s.num, 0)
    const priceTotal = cart.reduce((a, s) => a + s.pice * s.num, 6.99)
    return (
        <Wrapper>
            <div className="checkout_cnt">
                <h1>Checkout</h1>
                <div className="container_items">
                    <h1>Review you Bag</h1>
                    {cart?.map((item) => 
                            <Fragment key={item.id}>
                                <div className="cnt-bag-item">
                                    
                                    <div className="img_cnt">
                                        <img src={item.image} alt="" />
                                    </div>

                                    <div className="title_cnt">
                                        <h2>{item.name}</h2>
                                        <h5>{item.color}</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing</p>
                                    
                                        <div className="stars_cnt">
                                            <StarRate rate={item.rate}/>
                                            <h6>{item.rate}/5</h6>
                                        </div>
                                    
                                        <div className="price_cnt">
                                            <h6>$ {item.pice * item.num.toFixed(2)} x {item.num}</h6>
                                    
                                            <div className="counter">
                                    
                                                <button className='minus' onClick={() => onRemove(item)}>-</button>
                                                    <span>{item.num}</span>
                                                <button onClick={() => shopingCart(item)}>+</button>
                                    
                                            </div>
                                    
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        )}
                </div>wwww
            </div> 
            <div className="total_cnt">
                <div className="order_cnt">

                    <div className="order_summary">
                        <h3>Order Summary</h3>
                        <div><p>items:</p><p>$ {price.toFixed(2)}</p></div>wwwwwwww
                        {/* <div><p>shipping:</p><p>$ 6.99</p></div> */}
                        <div></div>
                        <h4>Order Total: $ {priceTotal.toFixed(2)}</h4>
                        <button onClick={() => toast('product received')}>Place your order</button>
                    </div>

                    <div className='link'>
                        <NavLink to='/bagitems' className='btn'> <Back /> Back</NavLink>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    .total_cnt{
        width: 30%;
        padding: 60px;
        .order_cnt{
            max-width: 243px;
        }
        .link{
            margin-left: 54%;
            margin-top: 56px;
        }
        a{
            display: flex;
            align-items: center;
            gap: 13px;
            text-decoration: none;
            color: #000000;
            padding: 12px 25px;
            border: 1px solid #1A1F16;
            border-radius: 11px;
            cursor: pointer; 
        }
        .order_summary{
            max-width: 100%;
            border-radius: 12px;
            padding: 15px;
            height: 249px;
            background-color: #FFFFFF;
            div{
                display: flex;
                padding: 0 5px;
                justify-content: space-between;
                p{
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    letter-spacing: -0.02em;
                    color: #60695C;
                }
                margin-top: 24px;
            }
            /* span{
                color: #BFD1E5;
            } */
            button{
                width: 100%;
                max-width: 211px;
                height: 35px;
                color: #FFFFFF;
                cursor: pointer;
                background: #1A1F16;
                border-radius: 11px;
                margin-top: 24px;
            }
            h4{
                margin-top: 19px;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 24px;
                color: #E5252C;
            }
            h3{
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 24px;
                color: #000000;
            }
        }
    }

    .checkout_cnt{
        width: 70%;
        height: 100vh;
        h1{
            font-style: normal;
            font-weight: 400;
            font-size: 48.83px;
            line-height: 59px;
            color: #1A1F16;
        }
    
        height: 99vh;
		overflow-y: scroll;
        ::-webkit-scrollbar {
            width: 0px;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: gray;
        }
    }

    margin-left: 123px;
    .container_items{
        max-width: 950px;
		min-height: 0px;
        background: #FFFFFF;
        padding: 0 20px;
        border: 1px solid transparent;
        border-radius: 21px;
        h1{
            margin: 20px 40px;
            font-style: normal;
            font-weight: 400;
            font-size: 36.25px;
            line-height: 38px;
            letter-spacing: 0.25em;
            text-transform: uppercase;
        }
    }
    .cnt-bag-item{
		margin-top: 20px;
		padding: 16px;
		display: flex;
        border-bottom: 2.5px solid #1A1F1680;
        :last-child {
            border: none;
        }
		.img_cnt{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 230px;
			height: 100%;
			img{
				width: 100%;
			}
		}
		.title_cnt{
			width: 100%;
			height: 100%;
			h2{
				margin-top: 14px;
				font-style: normal;
				font-weight: 400;
				font-size: 31.25px;
				line-height: 38px;
				color: #1A1F16;
			}
			h5{
				margin-top: 8px;
				font-style: normal;
				font-weight: 400;
				font-size: 20px;
				line-height: 24px;
				color: #60695C;
			}
			p{
				margin-top: 16px;
				font-style: normal;
				font-weight: 400;
				font-size: 20px;
				line-height: 24px;
				letter-spacing: -0.02em;
				color: #1A1F16;
			}
			.stars_cnt{
				display: flex;
				gap: 30px;
				margin-top: 25px;
				.stars{
					display: flex;
					gap: 5px;
				}
				h6{
					font-style: normal;
					font-weight: 400;
					font-size: 20px;
					line-height: 24px;
					letter-spacing: -0.02em;
					color: #12805D;
				}
			}
			.price_cnt{
				margin-top: 36px;
				display: flex;
				justify-content: space-between;
				h6{
					font-style: normal;
					font-weight: 400;
					font-size: 20px;
					line-height: 24px;
					color: #1A1F16;
				}
				button{
					width: 40px;
					height: 20px;
					color: #02D693;
					border: none;
					font-size: 24px;
					cursor: pointer;
					background-color: #FFFFFF;
					font-weight: 100;
				}
				.minus{
					color: #E5252C;
				}
				.counter{
					display: flex;
					align-items: center;
					span{
						margin-top: 7px;
					}
				}
			}
		}
	}
`
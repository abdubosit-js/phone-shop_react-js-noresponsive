import React, { Fragment } from 'react'
import styled from 'styled-components'
import { CheckoutCart } from './BagCopmponents/CheckoutCart'
import { StarRate } from './BagCopmponents/StarRate'

export const BagItems = ({onRemove, cart, shopingCart}) => {

	return (
		<Wrapper>
			<div className="bag_items-cnt">
				<h1>Check Your Bag Items</h1>
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
						 			<StarRate rate={item.rate} />
									<h6>{item.rate}</h6>
								</div>
								<div className="price_cnt">
									<h6>$ {item.pice.toFixed(2) * item.num.toFixed(2)} x {item.num}</h6>
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
			</div>
			<CheckoutCart
				cart={cart}
			/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 70%;
	.bag_items-cnt{
		h1{
			margin-top: 35px;
			font-style: normal;
			font-weight: 400;
			font-size: 48.83px;
			line-height: 59px;
			color: #1A1F16;
		}
		margin-left: 170px;
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
	.cnt-bag-item{
		max-width: 877px;
		min-height: 288px;
		margin-top: 20px;
		padding: 16px;
		display: flex;
		background: #FFFFFF;
		border-radius: 21px;
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



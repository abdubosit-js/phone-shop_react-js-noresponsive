import React, { Fragment } from 'react'
import styled from 'styled-components'
import { ReactComponent as Bag } from "../assets/Bag.svg"
import { NavLink } from 'react-router-dom'

export const Cart = ({cart}) => {
	
	const links = ["/bagitems"]

	return (
		<Wrapper>
			<h1>Bag</h1>
			<div className="bag_items">
				{cart?.map((product) => 
					<Fragment key={product.id}>
						<img src={product.image} alt="" />
					</Fragment>
				)}
			</div>
			{links.map((link,index) => 
                <Fragment key={index}>
                    <NavLink to={link}>
						<button><Bag /> View Bag</button>    
                    </NavLink>
                </Fragment>
            )}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 30%;
	height: 100vh;
	position: absolute;
	right: 0;
	top: 0;
	padding-top: 70px;
	a{
		text-decoration: none;
	}
	button{
		width: 159px;
		height: 40px;
		margin: 34px auto;
		display: flex;
		gap: 6px;
		align-items: center;
		justify-content: center;
		background: #1A1F16;
		border-radius: 14px;
		cursor: pointer;
		color: white;
		font-style: normal;
		font-weight: 500;
		font-size: 17px;
		line-height: 24px;
		svg{
			path{
				fill: #FFFFFF;
			}
		}
	}
	h1{
		text-align: center;
		font-style: normal;
		font-weight: 500;
		font-size: 39.06px;
		line-height: 47px;

		/* Font/Dark */

		color: #1A1F16;
	}
	.bag_items{
		max-width: 310px;
		display: flex;
		gap: 16px;
		flex-wrap: wrap;
		margin: 26px auto;
		img{
			width: 90px;
		}
	}
`
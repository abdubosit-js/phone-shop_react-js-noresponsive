import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { products } from '../../data/ProductArray'
import { StarRate } from "../BagCopmponents/StarRate"
import {ReactComponent as ShopBtn} from "../../assets/Button.svg"
import {ReactComponent as Back} from "../../assets/back.svg"
import { DescCart } from './DescCart'

export const Description = ({cart, shopingCart}) => {
    const {id} = useParams()

    const phoneDesc = () => {
        const result = products.filter(product => id.includes(product.id))
        return result
    }

    return (
        <Wrapper> 
            <div className="content_wrapper">
                <Link to="/product" className='back_bnt'><Back/> Back</Link>    
                {phoneDesc().map((item, index)=> {
                    return (
                        <div className='product_wrapper center' key={index}>
                            <div className="img_wrapper">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="title_wrapper">
                                <h1>{item.name}</h1>
                                <h3>{item.color}</h3>
                                <div className='star_flex-cnt'>
                                    <StarRate rate={item.rate}/>
                                    <p>{item.rate}/5</p>
                                </div>
                                <h4>${item.pice}</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque <br /> tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.</p>
                                <button onClick={() => shopingCart(item)}><ShopBtn /> Add to card</button>
                            </div>
                        </div >
                    )    
                })}
                <div className="line"></div>
                <div className='description'>
                    <h1>Description</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim odio faucibus nec malesuada purus volutpat vel sed viverra. Id sagittis, phasellus dui in arcu. Nec arcu, sit nunc, nibh purus pellentesque sagittis. Felis rhoncus facilisis massa eget purus in purus. Etiam at cras nulla nunc. Malesuada in pretium diam scelerisque sit mattis in egestas neque. Eu porta tempor sodales nisl integer turpis porttitor sed sed. Ut senectus odio dictum enim velit tempor diam quisque suspendisse. Orci vel ridiculus diam viverra. Libero malesuada orci, quis placerat suscipit augue imperdiet. Et praesent augue dictum mauris eget lacus malesuada. Aenean nisi, sodales natoque massa magna dignissim mi. Mattis tellus, justo, lorem sed tempor diam sit viverra enim. Id id placerat eu etiam nulla laoreet. Dignissim leo fames turpis quis suspendisse vulputate laoreet vulputate ac. Aliquam justo lectus eu dui porttitor. Cras a aliquam phasellus sollicitudin ornare. Tristique volutpat facilisis in ut proin. Est vitae facilisi sollicitudin id lorem mattis nibh ipsum, nec. Consectetur consectetur morbi morbi aliquet mi risus, velit, sit at. Integer morbi viverra hendrerit risus. Odio phasellus nibh senectus nec id enim quam sed. At potenti sollicitudin sollicitudin lobortis morbi. Nunc molestie et adipiscing aliquam. Sit vel mi dolor suscipit. In eget ut ac at facilisi leo viverra. Arcu ac ut fermentum, viverra et, vitae etiam cras. Eu purus non ut turpis fusce. Mi vitae nibh mi ut feugiat varius risus eros. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima aliquid voluptatum architecto ratione praesentium magni sapiente consequatur? Voluptate omnis repellat, possimus nulla, cumque eveniet unde, excepturi debitis soluta accusantium exercitationem.</p>
                </div>
            </div>
            <div className='right_line'></div>
            <DescCart cart={cart} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-left: 120px;
    width: 100%;
    display: flex;
    .back_bnt {
        margin-top: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        border: none;
        background-color: transparent;
        font-size: 20px;
        text-decoration: none;
        color: #1A1F16;
        cursor: pointer;
    }
    .content_wrapper {
        max-width: 70%;
        height: 93vh;
        padding: 0 20px;
        overflow-y: scroll;
        ::-webkit-scrollbar {
            width: 3.5px;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: gray;
        }
        img {
            width: 250px;
        }
        .line {
            width: 96%;
            height: 3px;
            border-radius: 10px;
            margin: 40px auto;
            background-color: #1A1F1680;
        }
        .description {
            margin-top: 32px;
            h1 {
                font-style: normal;
                font-weight: 500;
                font-size: 31.25px;
                line-height: 38px;
                color: #1A1F16;
            }
            p {
                margin-top: 8px;
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 24px;
                letter-spacing: -0.02em;
                color: #60695C;
            }
        }
        .product_wrapper {
            display: flex;
            gap: 50px;
            margin-top: 24px;
            .title_wrapper{
                position: relative;
                h1 {
                    font-style: normal;
                    font-weight: 700;
                    font-size: 61.04px;
                    line-height: 74px;
                    color: #1A1F16;
                }
                h3 {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 31.25px;
                    line-height: 38px;
                    color: rgba(26, 31, 22, 0.5);
                }
                h4 {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 31.25px;
                    line-height: 38px;
                    color: #1A1F16;
                }
                p {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 24px;
                    color: #1A1F16;
                }
                .star_flex-cnt{
                    display: flex;
                    gap: 8px;
                    align-items: center;
                    p {
                        font-weight: 400;
                        font-size: 20px;
                        line-height: 24px;
                        letter-spacing: -0.02em;
                        color: #12805D;
                    }
                    .stars{
                        display: flex;
                        gap: 4px;
                        align-items: center;
                    }
                }
                button {
                    display: flex;
                    position: absolute;
                    right: 0;
                    bottom: -25px;
                    align-items: center;
                    padding-right: 10px;
                    border-radius: 12px;
                    font-weight: 600;
                    color: white;
                    border: none;
                    background-color: #1A1F16;
                    cursor: pointer;
                    svg {
                        width: 40px;
                    }
                }
            }
        }
    }
`
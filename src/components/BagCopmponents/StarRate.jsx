import React from 'react'
import { ReactComponent as Star } from "../../assets/starts.svg"
import { ReactComponent as Epty } from "../../assets/starFill.svg"
import { ReactComponent as Half } from "../../assets/star-half.svg"

export const StarRate = ({rate}) => {

    const full = new Array(parseInt(rate)).fill(1); 
    const half = (rate % 1) * 2; 
    const empty = new Array(parseInt(5 - rate)).fill(1);
  
    return (
        <div className="stars">
            {full.map((idx) => (
                <div key={idx} className="full">
                    <Star />
                </div>
            ))}
            {half !== 0 && (
                <div className="half">
                    <Half />
                </div>
            )}
            {empty.map((item, idx) => (
                <div key={idx} className="empty">
                    <Epty />
                </div>
            ))}
        </div>
    )
}
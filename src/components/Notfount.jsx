import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Notfount = () => {
  return (
    <Wrapper>
        <h1>404</h1>
        <Link to="product">Home</Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 200px;
    font-weight: 600;
  }
  a {
    color: blue;
    font-size: 40px;
    text-decoration: none;
    border-bottom: 4px solid blue;
  }
`

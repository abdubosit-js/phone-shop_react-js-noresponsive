import React from 'react'
import styled from 'styled-components'

export const SearchBar = ({searchProducts}) => {
    
  return <Search placeholder='search phone' onChange={({target}) => searchProducts(target.value)} />
}

const Search = styled.input`
  width: 100%;
  max-width: 596px;
  height: 56px;
  border: none;
  display: block;
  padding-left: 20px;
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
  border-radius: 13px;
  margin: 0 auto 60px auto;
`
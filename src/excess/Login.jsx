import React, { useState } from 'react'
import styled from 'styled-components'

export const LoginForm = ({Login, error, shippingRef, streetRef, cityRef, stateRef, countryRef }) => {

    const [details, setDetails] = useState({
        shipping: "",
        street: "",
        city: "", 
        state: "",
        country: ""
    })

    const submitHandler = (e) => {
        e.preventDefault()
        Login(details)
    }

  return (
    <Wrapper>        
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <div className="form-group">
                    <label htmlFor="name">Shipping Name</label><br />
                    <input type="text" name='name' ref={shippingRef} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Street Name</label><br />
                    <input type="text" name='street'  ref={streetRef} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">City</label><br />
                    <input type="text" name='city' ref={cityRef} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">State/Provice</label><br />
                    <input type="text" name='state' ref={stateRef}/>
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label><br />
                    <input type="text" name='country' ref={countryRef} />
                </div>
                <input className='btn' type="submit" value="Login" />
            </div>
        </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 676px;
    margin: 40px auto;
    background: #FFFFFF;
    border-radius: 15px;
    .form-inner{
        .form-group{
            margin-top: 20px;
            label{
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                letter-spacing: -0.02em;
                color: rgba(26, 31, 22, 0.5);
            }
            input{
                width: 596px;
                height: 56px;
                margin-top: 10px;
                padding: 0 24px;
                background: #FFFFFF;
                box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
                border-radius: 13px;
                border: none;
            }
        }
        .btn{
            width: 596px;
            height: 40px;
            margin: 40px  auto;
            cursor: pointer;
            background: #1A1F16;
            border-radius: 10px;
            color: #FFFFFF;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`




// ) : (
//     <LoginForm 
//       Login={Login}
//       error={error} 
//       shippingRef={shippingRef}
//       streetRef={streetRef}
//       cityRef={cityRef}
//       stateRef={stateRef}
//       countryRef={countryRef}
//     />
//   )}

// __________________________________________________

// const shippingRef = useRef()
//   const streetRef = useRef()
//   const cityRef = useRef()
//   const stateRef = useRef()
//   const countryRef = useRef()
//   const navigate = useNavigate()

//   const getShipping = Boolean(localStorage.getItem('shipping'))
//   const getStreet = Boolean(localStorage.getItem('street'))
//   const getCity = Boolean(localStorage.getItem('city'))
//   const getState = Boolean(localStorage.getItem('state'))
//   const getCountry = Boolean(localStorage.getItem('country'))

//   const [user, setUser] = useState(false)
//   const [error, setError] = useState("")

//   const Login = () => {
//     localStorage.setItem('shipping', shippingRef.current.value)
//     localStorage.setItem('street', streetRef.current.value)
//     localStorage.setItem('city', cityRef.current.value)
//     localStorage.setItem('state', stateRef.current.value)
//     localStorage.setItem('country', countryRef.current.value)
//     if ( getShipping === true && getStreet === true && getCity === true && getState === true && getCountry === true ) {
//       navigate("/product")
//       setUser(true)
//     }
//   }
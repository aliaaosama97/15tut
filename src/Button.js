import React from 'react'

const Button = ({buttonText, reqTyp, setReqTyp}) => {
  return (
    
    <button
    className={buttonText === reqTyp ? "selected" : null}
    type="button"
    onClick={() => setReqTyp(buttonText)}
    >
      {buttonText}
    </button>
  
  )
}

export default Button
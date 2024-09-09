import React from 'react'
import Button from './Button'

const Form = ({reqType , setReqType}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Button
        buttonText="Users"
        reqTyp={reqType}
        setReqTyp={setReqType}
      />
      <Button
        buttonText="Posts"
        reqTyp={reqType}
        setReqTyp={setReqType}
      />
      <Button
        buttonText="Comments"
        reqTyp={reqType}
        setReqTyp={setReqType}
      />
    </form>
  )
}

export default Form
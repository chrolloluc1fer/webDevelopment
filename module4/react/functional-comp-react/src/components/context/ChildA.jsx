import React from 'react'
import ChildB from './ChildB'

function ChildA({firstName, lastName}) {
  return (

    <>
    <h1>This is ChildA</h1>
    <ChildB fName ={firstName} lName = {lastName}/>
    </>
    
  )
}

export default ChildA
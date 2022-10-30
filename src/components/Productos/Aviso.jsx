import React from 'react'

function aviso({children,text}) {
  return (
    <>
        <h4 style={{marginBottom: '10px'}}>{children}</h4>
        <p>{text}</p>
    </>
  )
}

export default aviso
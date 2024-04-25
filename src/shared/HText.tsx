import React from 'react'

type Props = {
    children:React.ReactNode
}

//kalau passing children, defaultnya adalah
// value di dalam tagnya
// contoh : 
// <HText>MORE THAN JUST GYM.</HText>
// ini childrenya = MORE THAN JUST GYM

const HText = ({children}: Props) => {
  return (
    <h1 
        className="basis-3/5 font-montserrat text-3xl font-bold"
    >
        {children}
    </h1>
  )
}

export default HText
import React from 'react'

// export default function FunProps(Props) {
//   console.log("🚀 ~ file: FunProps.jsx:4 ~ FunProps ~ Props:", Props)
//   return (
//     <>
//     <h1 style={{color: Props.color}}>My Name is {Props.name}</h1>
//     <h2>age is{Props.age}</h2>
//     </>
//   )
// }
export default function FunProps({name, age ,color}) {
    return (
   <>
     <h1 style={{color: color}}>My Name is {name}</h1>
      <h2>age is{age}</h2>
      </>
    )
  }

import React from 'react'

export default function MapKey() {
  let namearr = ["khush", "yagnik", "harsh", "unik"];
  return (
    <>
    <div>
    <h1>MApkey</h1>
    {namearr.map((e ,i) =>{
      return(
        <div key={i}>
        <h1  >
          {i+1}. {e}
          </h1>
      </div>

        )
      })}
      
      </div>
    </>
  )
}

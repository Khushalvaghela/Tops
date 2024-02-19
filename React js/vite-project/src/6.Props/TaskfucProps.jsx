import React from 'react';
// import DATA from "../../product.json";
import CardComTask from './CardComTask';

// console.log("🚀 ~ file: TaskfucProps.jsx:3 ~ DATA:", DATA)

export default function TaskfucProps() {
  return (
    <>
    <div className="d-flex flex-wrap gap-2 m-5 p-3" style={{backgroundColor: "plum"}}>
     {/* <h1>TaskfucProps</h1>  */}
     {
      DATA.map((e)=>{
        return<CardComTask data={e} price={e.price} disc={e.discountPercentage} after={e.price*e.discountPercentage/100} />
        
        // return <CardComTask name={e.title} Price={e.price} description={e.description}/>
      })
     }
      </div>
    </>
  )
}

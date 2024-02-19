import React, { useState } from 'react'
import { Button } from 'reactstrap';
import { toast} from "react-toastify";

export default function SingleInput() {
    let [city,setCity] = useState("")
    let [allCity,setAllCity] = useState([])
    const getdata = (eleData) => {
        setCity(eleData?.target?.value);
        
    }
    const addData = ()=>{
        if(city.length > 0){
            setAllCity([...allCity, city])
            setCity("")
            toast.success("complete")
        }else{
               toast.error("plz fill the error")
        }
    }
  return (
    <>
    <h1>{city}</h1>
      <input  value={city} type="text" onChange={(e) => getdata(e)}/>
      <Button onClick={addData}>Add city Name</Button>
      <div>
        {allCity.map((e, i) => {
                return <h1 className='border border-dark' key={i}>{e}</h1>;
            })}
      </div>
    </>
  )
}
let jdata=require("./data.json")

function city(params) {
    let cityname=jdata.map((e)=>{
        return e.city
    })
    //  console.log("cityname ~ cityname:", typeof cityname)
    let cityshow=cityname.filter((e)=>{
        return e.length>15
    }) 
    console.log("cityshow ~ cityshow:", cityshow)

    
}

 city()

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Input, Label } from "reactstrap";
// import WatchData from "../watches/WatchData";
// // import Acordian from "../watches/Acordian"

// export default function AllWatch() {
//   let [data, setData] = useState([]);

//   let [filter, setFilter] = useState({
//     gender: "male",
//     rating: 0,
//     search: "",
//     color: [],
//     brand: "",
//     size: [],
//     price: {},
//     discountPercentage: {},
//   });
//   useEffect(() => {
//     axios({
//       method: "get",
//       url: "http://localhost:9999/product/getAll",
//       params: filter,
//     }).then((res) => {
//       console.log("-----------  res.data.data----------->", res.data.data);
//       setData(res.data.data);
//     });
//   }, [filter]);

//   return (
//     <div>
//       <h1>men product</h1>
//       <Acordian setFilter={setFilter} filter={filter} />

//       <div className="d-flex flex-wrap gap-2 justify-content-around ">
//         {data.map((e) => {
//           return <WatchData product={e} key={e._id} />;
//         })}
//       </div>
//     </div>
//   );
// }

// AllWatch.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import WatchData from "../watches/WatchData";
import Acordion from "../watches/Acordian";
// import Example from "../watches/Acordian";

export default function AllWatch() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    gender: "",
    rating: 0,
    search: "",
    color: [],
    brand: "Fastreck",
    size: [],
    price: {},
    discountPercentage: {},
  });

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
      params: filter,
    }).then((res) => {
      setData(res.data.data);
    });
  }, [filter]);

  return (
    <>
      <div className="text-center border-top border-bottom py-3 m-3">
        <h3>1,271 items found for "Watches"</h3>
      </div>

      <div className="d-flex ">
        <div
          style={{
            position: "sticky",
            top: "0",
          }}
        >
          <Acordion setFilter={setFilter} filter={filter} />
        </div>

        <div className="d-flex flex-wrap  justify-content-around mt-3">
          {data.map((e) => {
            return <WatchData product={e} key={e._id} />;
          })}
        </div>
      </div>
    </>
  );
}

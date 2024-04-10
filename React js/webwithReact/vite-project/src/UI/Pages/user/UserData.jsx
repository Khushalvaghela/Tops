// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { Button, Table } from "reactstrap";

// export default function UserData() {
//   const [userData, setUserData] = useState([]);
//   // console.log("🚀 ~ UserData ~ data:", data)

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios
//       .get("http://localhost:9999/user/getAll")
//       .then((res) => {
//         setUserData(res.data);
//         console.log("Response Data:", res.data);
//       })
//       .catch((err) => {
//         toast.error(err.message);
//       });
//   };

//   return (
//     <>
//       <div>
//         <Button color="danger" onClick={fetchData}>
//           Call API
//         </Button>
//         <Table striped>
//           <thead>
//             <tr>
//               <th>SR.</th>
//               <th>email</th>
//               <th>Name</th>
//               <th>password</th>
//               <th>confirmpassword</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
           
//           </tbody>{userData.length > 0 && Array.isArray(userData) ? (
//   userData.map((item, index) => (
//     <tr key={index}>
//       <th scope="row">{index + 1}</th>
//       <td>{item.email}</td>
//       <td>{item.name}</td>
//       <td>{item.password}</td>
//       <td>{item.confirmpassword}</td>
//       {/* <td>{item.rating && item.rating.rate}</td>   */}
//     </tr>
//   ))
// ) : (
//   <tr>
//     <td colSpan="6">No data available</td>
//   </tr>
// )}

//         </Table>
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, Table } from "reactstrap";

export default function UserData() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:9999/user/getAll")
      .then((res) => {
        setUserData(res.data.data);
        console.log("Response Data:", res.data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <div>
        <Button color="danger" onClick={fetchData}>
          Call API
        </Button>
        <Table striped>
          <thead>
            <tr>
              <th>SR.</th>
              <th>email</th>
              <th>Name</th>
              <th>password</th>
              <th>confirmpassword</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userData.length > 0 && Array.isArray(userData) ? (
              userData.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.email}</td>
                  <td>{item.name}</td>
                  <td>{item.password}</td>
                  <td>{item.confirmpassword}</td>
                  {/* <td>{item.rating && item.rating.rate}</td>   */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No data available</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
}


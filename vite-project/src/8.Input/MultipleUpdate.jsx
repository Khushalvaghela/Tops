// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

// export default function MultiUpdate() {
//   let [user, setUser] = useState({
//     email: "",
//     password: "",
//   });
//   let [index, setIndex] = useState(null);
//   let [allUser, setAllUser] = useState([]);

//   const addData = (e) => {
//     if (user?.email?.length > 0 && user?.password?.length > 0) {
//       e.preventDefault();
//       setAllUser([...allUser, user]);
//       toast.success("User Added succesfully");
//       setUser({
//         email: "",
//         password: "",
//       });
//     } else {
//       toast.error("Please fill data");
//     }
//   };

//   const updateData = () => {
    
//     if (index || index === 0) {
//       allUser.splice(index, 1, user);
//       setUser([...allUser]);

//       setUser({
//         email: "",
//         password: "",
//       });
//       setIndex(null);
//     } else {
//       toast("Please select data");
//     }
  
// };
  

//   const updateHandler = (data, index) => {
//     setUser(data);
//     setIndex(index);
//   };
//   return (
//     <>
//       <Form className="border border-dark p-3 rounded-3">
//         <FormGroup>
//           <Label for="exampleEmail">Email</Label>
//           <Input
//             value={user?.email}
//             id="exampleEmail"
//             name="email"
//             placeholder="Enter your email"
//             type="email"
//             onChange={(e) => setUser({ ...user, email: e?.target?.value })}
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="examplePassword">Password</Label>
//           <Input
//             id="examplePassword"
//             name="password"
//             value={user?.password}
//             placeholder="Enter your password"
//             type="password"
//             onChange={(e) => setUser({ ...user, password: e?.target?.value })}
//           />
//         </FormGroup>
//         {index || index === 0 ? (
//           <Button onClick={updateData} className="w-100" color="danger">
//             Update
//           </Button>
//         ) : (
//           <Button onClick={(e) => addData(e)} className="w-100" color="danger">
//             Submit
//           </Button>
//         )}
//       </Form>

//       <Table striped>
//         <thead>
//           <tr>
//             <th>Sr.</th>
//             <th>Email</th>
//             <th>Password</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {allUser.map((e, i) => {
//             return (
//               <tr key={i}>
//                 <th scope="row">{i + 1}</th>
//                 <td>{e.email}</td>
//                 {/* <td style={{ color: "green" }}>{e.password}</td> */}
//                 <td>
//                   {e.password.length < 8 ? (
//                     <td style={{ color: "red" }}>{e.password}</td>
//                   ) : (
//                     <td style={{ color: "green" }}>{e.password}</td>
//                   )}
//                 </td>
//                 <td>
//                   <Button onClick={() => updateHandler(e, i)} color="danger">
//                     Update
//                   </Button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>
//     </>
//   );
// }

import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function MultiUpdate() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [index, setIndex] = useState(null);
  const [allUser, setAllUser] = useState([]);

  const addData = (e) => {
    e.preventDefault();

    if (user?.email?.length > 0 && user?.password?.length > 0) {

      if (!allUser.some((dUser) => samedata(dUser, user))) {
        setAllUser([...allUser, user]);
        toast.success("User Added successfully");
        setUser({
          email: "",
          password: "",
        });
      } else {
        toast.error("User with the same data already exists");
      }
    } else {
      toast.error("Please fill data");
    }
  };

  const updateData = () => {
    if (index || index === 0) {
      const updatedUsers = [...allUser];
      updatedUsers.splice(index, 1, user);
      setAllUser(updatedUsers);

      setUser({
        email: "",
        password: "",
      });
      setIndex(null);
    } else {
      toast.error("Please select data");
    }
  };

  const updateHandler = (data, index) => {
    setUser(data);
    setIndex(index);
  };

  // const samedata = (user1, user2) => {
  //   return user1.email === user2.email && user1.password === user2.password;
  // };

  return (
    <>
      <Form className="border border-dark p-3 rounded-3">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            value={user?.email}
            id="exampleEmail"
            name="email"
            placeholder="Enter your email"
            type="email"
            onChange={(e) => setUser({ ...user, email: e?.target?.value })}
          />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            value={user?.password}
            placeholder="Enter your password"
            type="password"
            onChange={(e) => setUser({ ...user, password: e?.target?.value })}
          />
        </FormGroup>
        {index || index === 0 ? (
          <Button onClick={updateData} className="w-100" color="danger">
            Update
          </Button>
        ) : (
          <Button onClick={addData} className="w-100" color="danger">
            Submit
          </Button>
        )}
      </Form>

      <Table striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((e, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{e.email}</td>
              <td style={{ color: e.password.length < 8 ? "red" : "green" }}>
                {e.password}
              </td>
              <td>
                <Button onClick={() => updateHandler(e, i)} color="danger">
                  Update
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}



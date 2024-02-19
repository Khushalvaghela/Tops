import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

let nameArr = ["khush", "nimesh", "parth", "kajal"];

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column">
      <h1>Home</h1>

      <ul>
        {nameArr.map((e, i) => {
          return (
            <li
              key={i}
              className="text-capitalize"
              role="button"
              onClick={() => navigate(`/user/${e}`)}
            >
              {e}
            </li>
          );
        })}

        <li role="button" onClick={() => navigate("/user/vaghela ")}>
          vaghela
        </li>
      </ul>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
}

// export default function Home() {
//   const navigate = useNavigate();
//   return (
//     <>
//       <h1>Home</h1>
//       <Button onClick={() => navigate(-1)}>Go Back</Button>
//     </>
//   );
// }

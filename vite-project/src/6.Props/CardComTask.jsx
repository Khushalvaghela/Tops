import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";



export default function CardComTask(props) {
  // console.log("🚀 ~ file: CardComTask.jsx:13 ~ CardComTask ~ Props:", props)
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <CardImg alt="Sample"  src="https://picsum.photos/300/200" />
      <CardBody>
        <CardTitle tag="h5">{props?.data?.title || "tital unaveleible"}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {props?.data?.price} Rs.
        </CardSubtitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
         <p> afterdiscount={props?.price-props?.after}</p>
         <p>discount={props?.data?.discountPercentage}</p>
        </CardSubtitle>
        <CardText>
         {props?.data?.description}
        </CardText>
        <Button color="danger" className="w-100">Button</Button>
      </CardBody>
    </Card>
  );
}

// export default function CardComTask(Props) {
//   console.log("🚀 ~ file: CardComTask.jsx:13 ~ CardComTask ~ Props:", Props)
//   return (
//     <Card
//       style={{
//         width: "18rem",
//       }}
//     >
//       <CardImg alt="Sample"  src="https://picsum.photos/300/200" />
//       <CardBody>
//         <CardTitle tag="h5">{Props?.e?.name}</CardTitle>
//         <CardSubtitle className="mb-2 text-muted" tag="h6">
//           {Props.Price} Rs.
//         </CardSubtitle>
//         <CardText>
//          {Props.description}
//         </CardText>
//         <Button color="danger" className="w-100">Button</Button>
//       </CardBody>
//     </Card>
//   );
// }

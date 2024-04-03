// import React from 'react'
// import "./Watch.css"


// import img1 from "../../../images/watch1.jpg"
// import img2 from "../../../images/watch 2.jpg"
// import img3 from "../../../images/watch 3.jpg"
// import img4 from "../../../images/watch 4.jpg"
// import img5 from "../../../images/watch 5.jpg"
// import img6 from "../../../images/watch 6.jpg"
// import img7 from "../../../images/watch 7.jpg"
// import img8 from "../../../images/watch 8.jpg"
// import img9 from "../../../images/watch 9.jpg"
// import img10 from "../../../images/watch 10.jpg"
// // import img11 from "../../../images/watch-11.jpg"
// import img12 from "../../../images/watch 12.jpg"
// import img13 from "../../../images/watch 13.jpg"
// import img14 from "../../../images/watch 14.jpg"
// import img15 from "../../../images/watch 15.jpg"
// import img16 from "../../../images/watch 16.jpg"
// import img17 from "../../../images/watch 17.jpg"
// import img18 from "../../../images/watch 18.jpg"
// import img19 from "../../../images/watch 19.jpg"
// import img20 from "../../../images/watch 20.jpg"
// import img21 from "../../../images/watch 21.jpg"
// import { Heart } from 'lucide-react'


// let items =[
  
//     {
//       "img": img1,
//       "content": "Fasttrack Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
//       "category": "Men's Watch",
//       "price": "₹ 3,445"
//     },
//     {
//       "img": img2,
//       "content": "Fasttrack Neo Splash Blue Dial Quartz Multifunction Stainless Steel Strap watch for Men",
//       "category": "Men's Watch",
//       "price": "₹ 6,995"
//     },
//     {
//       "img": img3,
//       "content": "Fasttrack Men's Maritime Pro Lateen Sail Chronograph Watch",
//       "category": "Unisex Watch",
//       "price": "₹ 15,545"
//     },
//     {
//       "img": img4,
//       "content": "Fasttrack Neo Splash Quartz Multifunction Black Dial Stainless Steel Strap Watch for Men",
//       "category": "Men's Watch",
//       "price": "₹ 6,345"
//     },
//     {
//       "img": img5,
//       "content": "Fasttrack Neo Splash Quartz Multifunction Black Dial Stainless Steel Strap Watch for Men",
//       "category": "Men's Watch",
//       "price": "₹ 3,995"
//     },
//     {
//       "img": img6,
//       "content": "Fasttrack Regalia Opulent Analog With Day And Date Black Dial Watch For Men",
//       "category": "Men's Watch",
//       "price": "₹ 7,295"
//     },
//     {
//       "img": img7,
//       "content": "Fasttrack Grandmaster Brown Dial Analog Stainless Steel Strap Watch For Men",
//       "category": "Men's Watch",
//       "price": "₹ 10,045"
//     },
//     {
//       "img": img8,
//       "content": "Fasttrack Regalia Premium Green Chrono Stainless Steel Strap Watch For Men",
//       "category": "Men's Watch",
//       "price": "₹ 11,995"
//     },
//     {
//       "img":img9,
//       "content": "Fasttrack Regalia Premium Green Chrono Stainless Steel Strap Watch For Men",
//       "category": "Men's Watch",
//       "price": "₹ 6,755"
//     },
//     {
//       "img": img10,
//       "content": "Fasttrack Regalia Premium Green Chrono Stainless Steel Strap Watch For Men",
//       "category": "Men's Watch",
//       "price": "₹ 5,515"
//     },
//     {
//       "img": img12,
//       "content": "Fasttrack Regalia Premium Green Chrono Stainless Steel Strap Watch For Men",
//       "category": "Men's Watch",
//       "price": "₹ 10,395"
//     },
//     {
//       "img": img13,
//       "content": "Fasttrack Regalia Premium Green Chrono Stainless Steel Strap Watch For Men",
//       "category": "Men's Watch",
//       "price": "₹ 4,905"
//     },
//     {
//       "img": img14,
//       "content": "Fasttrack Regalia Premium Green Chrono Stainless Steel Strap Watch For Men",
//       "category": "Men's Watch",
//       "price": "₹ 5,855"
//     },
//     {
//       "img": img15,
//       "content": "Fasttrack Regalia Premium Green Chrono Stainless Steel Strap Watch For Men",
//       "category": "Men's Watch",
//       "price": "₹ 9,520"
//     },
//     {
//       "img": img16,
//       "content": "Fasttrack Regalia Premium Green Chrono Stainless Steel Strap Watch For Men",
//       "category": "Men's Watch",
//       "price": "₹ 12,500"
//     },
//     {
//       "img": img17,
//       "content": "Fasttrack Regalia Premium Green Chrono Stainless Steel Strap Watch For Men",
//       "category": "Men's Watch",
//       "price": "₹ 7,950"
//     },
//     {
//       "img": img18,
//       "content": "Fasttrack Regalia Premium Green Chrono Stainless Steel Strap Watch For Men",
//       "category": "Men's Watch",
//       "price": "₹ 6,850"
//     },
//     {
//       "img": img19,
//       "content": "Fasttrack Regalia Premium Green Chrono Stainless Steel Strap Watch For Men",
//       "category": "Men's Watch",
//       "price": "₹ 9,780"
//     },
//     {
//       "img": img20,
//       "content": "Fasttrack Regalia Premium Green Chrono Stainless Steel Strap Watch For Men",
//       "category": "Men's Watch",
//       "price": "₹ 2,995"
//     },
//     {
//       "img": img21,
//       "content": "Fasttrack Regalia Premium Green Chrono Stainless Steel Strap Watch For Men",
//       "category": "Men's Watch",
//       "price": "₹ 4,500"
//     }
//   ]
  


// export default function WatchData() {
//   return (
    
//     <div className="grid-container">
//     {items.map((item, index) => (
//       <div className="card" key={index}>
//         <div className='relative overflow-hidden'>
//           <img src={item.img} alt={item.content} className="mb-2" />
//           <div className='absolute h-full w-full bg-black/0 flex justify-end items-start -top-20 hover:-top-3 pe-2 pt-4 hover:opacity-100 opacity-20 transition-all duration-700'>
//             {/* Icon or action button */}
//           </div>
//         </div>
//         <h6 className="line-clamp-2 hover:underline">{item.content}</h6>
//         <p className="text-gray-500">{item.category}</p>
//         <h5 className='pb-3 text-black'>{item.price}</h5>
//         <button className="button">
//           Add to cart
//         </button>
//       </div>
//     ))}
//   </div>
//   )
// }



// import React from "react";
// import {
//   Button,
//   Card,
//   CardBody,
//   CardSubtitle,
//   CardText,
//   CardTitle,
// } from "reactstrap";

// export default function CardCom({ product }) {
//   return (
//     <div>
//       <Card
//         style={{
//           width: "18rem",
//         }}
//       >
//         <img alt="Sample" src={product?.thumbnail} />
//         <CardBody>
//           <CardTitle tag="h5"> {product.title}</CardTitle>
//           <CardSubtitle className="mb-2 text-muted" tag="h6">
//             {product.description}
//           </CardSubtitle>
//           <CardText>
//             <p>
//               {" "}
//               <b>Price : </b> {product?.price}
//             </p>
//           </CardText>
//           <Button>Button</Button>
//         </CardBody>
//       </Card>
//     </div>
//   );
// }
import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

export default function WatchData({ product }) {
  // Check if product exists before accessing its properties
  if (!product) {
    return null; // Return null or any placeholder element if product is not available
  }

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <img alt="Sample" src={product.thumbnail} />
        <CardBody>
          <CardTitle tag="h5">{product.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">{product.description}</CardSubtitle>
          <CardText>
            <p><b>Price:</b> {product.price}</p>
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}

// import React, { useEffect } from "react";
// import img1 from "../../../assets/images/bag.svg";
// import { useNavigate } from "react-router-dom";
// import { fetchCart } from "../../../redux/fetures/product/cart";
// import { useDispatch, useSelector } from "react-redux";
// import "./bag.css";

// export default function Bags() {
//   const dispatch = useDispatch();
//   const { error, cart, pending } = useSelector((store) => store.cartSlice);
//   console.log("🚀 ~ Bag ~ pending:", pending);
//   console.log("🚀 ~ Bag ~ cart:", cart);
//   console.log("🚀 ~ Bag ~ error:", error);

//   useEffect(() => {
//     dispatch(fetchCart());
//   }, []);

//   return (
//     <>
//       {pending ? (
//         <h1>Loading...</h1>
//       ) : (
//         <div className="shopping-cart-container">
//           <h1 className="shopping-cart-heading">Shopping Cart</h1>

//           <div className="cart">
//             <div className="cart-header">
//               {/* <span className="cart-item">Item</span> */}
//               <span className="cart-details">Details</span>
//               <span className="cart-price">Price</span>
//               {/* <span className="cart-quantity">Quantity</span>
//               <span className="cart-remove">Remove</span>
//               <span className="cart-total">Total</span> */}
//             </div>

//             {cart.map((item) => (
//               <div className="cart-item" key={item.productId}>
//                 <div className="cart-item-image">
//                   <img src={item?.productId?.thumbnail} alt="Product" />
//                 </div>
//                 <div className="cart-item-details">
//                   <div className="cart-item-title">{item?.productId?.title}</div>
//                   <p className="cart-item-description">{item?.productId?.description}</p>
//                 </div>
//                 <div className="cart-item-price">{item?.productId?.price}</div>
//                 {/* <div className="cart-item-quantity">
//                   <input type="number" value={item.quantity} min="1" />
//                 </div> */}
//                 <div className="cart-item-remove">
//                   <button className="remove-item">Remove</button>
//                 </div>
//                 <div className="cart-item-total">
//                   {(item?.productId?.price * item?.productId?.quantity).toFixed(2)}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { addCart,fetchCart } from "../../../redux/fetures/product/cart";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "reactstrap";
import axios from "axios";
import "./bag.css";

export default function Bags() {
  const dispatch = useDispatch();
  const { error, cart, pending, cartid } = useSelector(
    (store) => store.cartSlice
  );
  console.log("WishList  cartid:", cartid);
  const data = useSelector((state) => state.authSlice);

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  const dcrementeHnadler = (productId, count, id) => {
    let isRemove = false;
    if (id || count === 1) {
      isRemove = true;
    }

    axios({
      method: "put",
      url: `http://localhost:9999/cart/update`,
      data: {
        _id: cartid,
        productId,
        isRemove,
      },
      headers: {
        authorization: `Bearer ${data?.token}`,
        "Content-Type": "application/json",
      },
    })?.then((res) => {
      dispatch(addCart(res.data));
    });
  };

  const deleteAllHandler = () => {
    axios({
      method: "delete",
      url: `http://localhost:9999/cart/delete/${id}`,
    });
  };
  console.log("+++++", cart);

  return (
    <div>
      <div className="" style={{ marginTop: "0px" }}>
        <div>
          {" "}
          <Button onClick={() => deleteAllHandler()}>deleteAll</Button>{" "}
        </div>
        <div>
          <h3 className="">MY CART LIST</h3>
        </div>
        <div>
          <div>
            {cart?.map((e, i) => {
              return (
                <div key={i} className="flex   items-center my-2">
                  <div className="flex-1 flex justify-center">
                    <img
                      src={e?.productId?.thumbnail}
                      alt=""
                      className="w-36 rounded"
                    />
                  </div>
                  <div className="flex-1 grig items-center">
                    <p>
                      {" "}
                      <span>TITTLE :</span> {e?.productId?.title}
                    </p>
                    <p>
                      {" "}
                      <span>PRICE :</span> {e?.productId?.price}
                    </p>
                  </div>
                  <div className="flex-1">
                    <div className="d-flex gap-3">
                      <Button
                        onClick={() =>
                          dcrementeHnadler(e?.productId?._id, e?.count)
                        }
                        className="bg-transparent text-black fw-bolder  "
                      >
                        -
                      </Button>
                      <p>{e.count}</p>
                      <Button className="bg-transparent text-black fw-bolder  ">
                        +
                      </Button>

                      <Button
                        onClick={() =>
                          dcrementeHnadler(e.productId._id, e.count, e._id)
                        }
                        className="bg-dark ms-14"
                      >
                        Remove
                      </Button>
                    </div>

                    {/* <p> <span>COUNT : </span> {e.count}  </p> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

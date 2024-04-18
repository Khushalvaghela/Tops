

// import React, { useEffect } from "react";
// import img1 from "../../../assets/images/bag.svg";
// import { useNavigate } from "react-router-dom";
// import { fetchCart } from "../../../redux/fetures/product/cart";
// import { useDispatch, useSelector } from "react-redux";
// import "./bag.css";

// export default function Bag() {
//   // const navigate = useNavigate();
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
//         <div>
//           <h1 className="mb-5">Shopping Cart</h1>

//           <div className="shopping-cart">
//             <div className="column-labels">
//               <label className="product-image">Image</label>
//               <label className="product-details">Product</label>
//               <label className="product-price">Price</label>
//               <label className="product-quantity">Quantity</label>
//               <label className="product-removal">Remove</label>
//               <label className="product-line-price">Total</label>
//             </div>
//             {cart?.map((e) => (
//               <div className="product" key={e?.productId}>
//                 <div className="product-image">
//                   <img src={e?.productId?.thumbnail} alt="Product" />
//                 </div>
//                 <div className="product-details">
//                   <div className="product-title">{e?.productId?.title}</div>
//                   <p className="product-description">{e?.productId?.description}</p>
//                 </div>
//                 <div className="product-price">{e?.productId?.productPrice}</div>
//                 <div className="product-quantity">
//                   <input type="number" value={e?.productId?.quantity} min="1" />
//                 </div>
//                 <div className="product-removal">
//                   <button className="remove-product">Remove</button>
//                 </div>
//                 <div className="product-line-price">
//                   {(e?.productId?.productPrice * e.quantity).toFixed(2)}
//                 </div>
//               </div>
//             ))}

//             {/* <div className="totals">
//               <div className="totals-item">
//                 <label>Subtotal</label>
//                 <div className="totals-value" id="cart-subtotal">
//                   71.97
//                 </div>
//               </div>
//               <div className="totals-item">
//                 <label>Tax (5%)</label>
//                 <div className="totals-value" id="cart-tax">
//                   3.60
//                 </div>
//               </div>
//               <div className="totals-item">
//                 <label>Shipping</label>
//                 <div className="totals-value" id="cart-shipping">
//                   15.00
//                 </div>
//               </div>
//               <div className="totals-item totals-item-total">
//                 <label>Grand Total</label>
//                 <div className="totals-value" id="cart-total">
//                   90.57
//                 </div>
//               </div>
//             </div> */}

//             {/* <button className="checkout">Checkout</button> */}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
// Bag.js

import React, { useEffect } from "react";
import img1 from "../../../assets/images/bag.svg";
import { useNavigate } from "react-router-dom";
import { fetchCart } from "../../../redux/fetures/product/cart";
import { useDispatch, useSelector } from "react-redux";
import "./bag.css";

export default function Bags() {
  const dispatch = useDispatch();
  const { error, cart, pending } = useSelector((store) => store.cartSlice);
  console.log("🚀 ~ Bag ~ pending:", pending);
  console.log("🚀 ~ Bag ~ cart:", cart);
  console.log("🚀 ~ Bag ~ error:", error);

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  return (
    <>
      {pending ? (
        <h1>Loading...</h1>
      ) : (
        <div className="shopping-cart-container">
          <h1 className="shopping-cart-heading">Shopping Cart</h1>

          <div className="cart">
            <div className="cart-header">
              {/* <span className="cart-item">Item</span> */}
              <span className="cart-details">Details</span>
              <span className="cart-price">Price</span>
              {/* <span className="cart-quantity">Quantity</span>
              <span className="cart-remove">Remove</span>
              <span className="cart-total">Total</span> */}
            </div>

            {cart.map((item) => (
              <div className="cart-item" key={item.productId}>
                <div className="cart-item-image">
                  <img src={item?.productId?.thumbnail} alt="Product" />
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-title">{item?.productId?.title}</div>
                  <p className="cart-item-description">{item?.productId?.description}</p>
                </div>
                <div className="cart-item-price">{item?.productId?.price}</div>
                {/* <div className="cart-item-quantity">
                  <input type="number" value={item.quantity} min="1" />
                </div> */}
                <div className="cart-item-remove">
                  <button className="remove-item">Remove</button>
                </div>
                <div className="cart-item-total">
                  {(item?.productId?.price * item?.productId?.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

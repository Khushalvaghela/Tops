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

import React from "react";
import { useEffect } from "react";
import {
  addCart,
  fetchCart,
  setCart,
} from "../../../redux/fetures/product/cart";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import axios from "axios";

const Bag = ({ product }) => {
  const dispatch = useDispatch();
  const { error, cart, pending, cartId } = useSelector(
    (store) => store.cartSlice
  );
  console.log("🚀 ~ Bag ~ cartid:", cartId);
  const data = useSelector((state) => state.authSlice);

  const dataWatch = useSelector((state) => state.authSlice);

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
        _id: cartId,
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

  const incrimentHandler = (productId) => {
    axios({
      method: "post",
      url: `http://localhost:9999/cart/create/${productId}`,

      headers: {
        authorization: `Bearer ${dataWatch?.token}`,

        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // console.log("cardlog", res?.data?.data);
        dispatch(fetchCart());
        toast.success("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteAllHandler = () => {
    axios({
      method: "delete",
      url: `http://localhost:9999/cart/delete/${cartId}`,
      headers: {
        authorization: `Bearer ${data?.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("delete", res);
        dispatch(setCart());
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <div>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <div>
              <Button onClick={() => deleteAllHandler(cartId)}>
                DeleteAll
              </Button>
            </div>
            <tr>
              <th scope="col" class="h5">
                Shopping Bag
              </th>
              <th scope="col">Format</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Remove product</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((e, i) => (
              <tr key={i}>
                <th scope="row">
                  <div class="d-flex align-items-center">
                    <img
                      src={e?.productId?.thumbnail}
                      class="img-fluid rounded-3"
                      style={{ width: "120px" }}
                      alt="Book"
                    />
                    <div class="flex-column ms-4">
                      <p class="mb-2">{e?.productId?.title}</p>
                      <p class="mb-0">{e?.productId?.description}</p>
                    </div>
                  </div>
                </th>
                <td class="align-middle">
                  <p class="mb-0" style={{ fontWeight: 500 }}>
                    Digital
                  </p>
                </td>
                <td class="align-middle">
                  <div class="d-flex flex-row">
                    <Button
                      onClick={() => dcrementeHnadler(e.productId._id, e.count)}
                      className="bg-transparent text-black fw-bolder  "
                    >
                      -
                    </Button>
                    <div className="grid content-center border border-black mx-2 px-3 rounded">
                      {e.count}
                    </div>
                    <p className="text-center"></p>
                    <Button
                      onClick={() => incrimentHandler(e?.productId?._id, e?.count)}
                      className="bg-transparent text-black fw-bolder  "
                    >
                      +
                    </Button>
                  </div>
                </td>
                <td class="align-middle">
                  <p class="mb-0" style={{ fontWeight: 500 }}>
                    {e?.productId?.price}
                  </p>
                </td>
                <td>
                  {" "}
                  <div>
                    {" "}
                    <Button
                      onClick={() =>
                        dcrementeHnadler(e.productId._id, e.count, e._id)
                      }
                      className="bg-dark ms-14"
                    >
                      Remove
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        class="card shadow-2-strong mb-5 mb-lg-0"
        style={{ borderRadius: "16px" }}
      >
        <div class="card-body p-4">
          <div class="row">
            <div class="col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
              <form>
                <div class="d-flex flex-row pb-3">
                  <div class="d-flex align-items-center pe-2">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel1v"
                      value=""
                      aria-label="..."
                      checked
                    />
                  </div>
                  <div class="rounded border w-100 p-3">
                    <p class="d-flex align-items-center mb-0">
                      <i class="fab fa-cc-mastercard fa-2x text-dark pe-2"></i>
                      Credit Card
                    </p>
                  </div>
                </div>
                <div class="d-flex flex-row pb-3">
                  <div class="d-flex align-items-center pe-2">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel2v"
                      value=""
                      aria-label="..."
                    />
                  </div>
                  <div class="rounded border w-100 p-3">
                    <p class="d-flex align-items-center mb-0">
                      <i class="fab fa-cc-visa fa-2x fa-lg text-dark pe-2"></i>
                      Debit Card
                    </p>
                  </div>
                </div>
                <div class="d-flex flex-row">
                  <div class="d-flex align-items-center pe-2">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel3v"
                      value=""
                      aria-label="..."
                    />
                  </div>
                  <div class="rounded border w-100 p-3">
                    <p class="d-flex align-items-center mb-0">
                      <i class="fab fa-cc-paypal fa-2x fa-lg text-dark pe-2"></i>
                      PayPal
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-6">
              <div class="row">
                <div class="col-12 col-xl-6">
                  <div data-mdb-input-init class="form-outline mb-4 mb-xl-5">
                    <input
                      type="text"
                      id="typeName"
                      class="form-control form-control-lg"
                      siez="17"
                      placeholder="John Smith"
                    />
                    <label class="form-label" for="typeName">
                      Name on card
                    </label>
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4 mb-xl-5">
                    <input
                      type="text"
                      id="typeExp"
                      class="form-control form-control-lg"
                      placeholder="MM/YY"
                      size="7"
                      minlength="7"
                      maxlength="7"
                    />
                    <label class="form-label" for="typeExp">
                      Expiration
                    </label>
                  </div>
                </div>
                <div class="col-12 col-xl-6">
                  <div data-mdb-input-init class="form-outline mb-4 mb-xl-5">
                    <input
                      type="text"
                      id="typeText"
                      class="form-control form-control-lg"
                      siez="17"
                      placeholder="1111 2222 3333 4444"
                      minlength="19"
                      maxlength="19"
                    />
                    <label class="form-label" for="typeText">
                      Card Number
                    </label>
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4 mb-xl-5">
                    <input
                      type="password"
                      id="typeText"
                      class="form-control form-control-lg"
                      placeholder="&#9679;&#9679;&#9679;"
                      size="1"
                      minlength="3"
                      maxlength="3"
                    />
                    <label class="form-label" for="typeText">
                      Cvv
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-xl-3">
              <div
                class="d-flex justify-content-between"
                style={{ fontWeight: 500 }}
              >
                <p class="mb-2">Subtotal</p>
                <p class="mb-2">$23.49</p>
              </div>

              <div
                class="d-flex justify-content-between"
                style={{ fontWeight: 500 }}
              >
                <p class="mb-0">Shipping</p>
                <p class="mb-0">$2.99</p>
              </div>

              <hr class="my-4" />

              <div
                class="d-flex justify-content-between mb-4"
                style={{ fontWeight: 500 }}
              >
                <p class="mb-2">Total (tax included)</p>
                <p class="mb-2">$26.48</p>
              </div>

              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                class="btn btn-primary btn-block btn-lg"
              >
                <div class="d-flex justify-content-between">
                  <span>Checkout</span>
                  <span>$26.48</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;

import axios from "axios";
import { Edit, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Table,
  FormGroup,
  Form,
  Label,
  Input,
} from "reactstrap";

import img1 from "../../image/car2.avif";
import img2 from "../../image/bike.avif";
import img3 from "../../image/truck.avif";
import img4 from "../../image/cycle.avif";

// const colorOptions = [
//   { value: "red", label: "Red" },
//   { value: "green", label: "Green" },
//   { value: "yellow", label: "Yellow" },
//   { value: "black", label: "Black" },
//   { value: "white", label: "White" },
//   { value: "blue", label: "Blue" },
// ];
const data = [
  { value: "car", label: "Car", img: img1 },
  { value: "bike", label: "Bike", img: img2 },
  { value: "truck", label: "Truck", img: img3 },
  { value: "cycle", label: "Cycle", img: img4 },
];
const categoryOptions = [
  { value: "casual", label: "Casual" },
  { value: "sports", label: "Sports" },
  { value: "formal", label: "Formal" },
  { value: "party-Wear", label: "Party Wear" },
];
const sizeArr = ["41", "42", "43", "44", "45"];

const intialProduct = {
  title: "",
  description: "",
  brand: "",
  gender: "", // radio
  price: "", // number
  discountPercentage: "", // text
  availableStock: "", // text
  category: [], // select
  thumbnail: "", // text
  color: [], // select
  size: [], // checkbox
};

let obj2 = {
  gender: "male", // radio // male-female-kids
  title: "Nike airJordan-440", // text
  description: "shose with comfort", // text
  price: 1999, // number
  discountPercentage: 70, // text
  availableStock: 10, // text
  brand: "nike", // text
  category: ["casual", "highlength"], // select
  thumbnail: "url", // text
  color: ["black", "white", "yellow", "green"], // select
  size: ["45", "44", "43", "42"], // checkbox
};

export default function Product() {
  const [product, setProduct] = useState(intialProduct);
  console.log("🚀 ~ Product ~ product:", product);
  let [allProduct, setAllProduct] = useState([]);
  const [modal, setModal] = useState(false);
  const [refetch, setRefetch] = useState(true);
  const [updateMode, setUpdateMode] = useState(false);

  const refetchData = () => setRefetch(!refetch);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
    })
      .then((res) => {
        console.log("---->", res.data.data);
        setAllProduct(res?.data?.data);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, [refetch]);
  const deleteHandler = (id) => {
    console.log("-----------  id----------->", id);

    axios({
      method: "delete",
      url: `http://localhost:9999/product/delete/${id}`,
    })
      .then((res) => {
        toast.success("Product deleted...!");
        refetchData();
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  const updateHandler = (data) => {
    console.log("-----------  data----------->", data);
    toggle();
    setProduct(data);
    setUpdateMode(true);
  };

  const updateData = () => {
    axios({
      method: "put",
      url: `http://localhost:9999/product/update/${product?._id}`,
      data: product,
    })
      .then((res) => {
        toast.success("Data updated..!");
        setProduct(intialProduct);
        toggle();
        refetchData();
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  const blankForm = () => {
    setProduct(intialProduct);
    toggle();
  };

  const toggle = () => setModal(!modal);

  let submitHandler = (e) => {
    e.preventDefault();
    console.log("-----------  product----------->", product);
    axios({
      method: "post",
      url: "http://localhost:9999/product/create",
      data: product,
    })
      .then((res) => {
        toast.success("data added");
        setProduct(intialProduct);
        toggle();
        console.log("------>");
        refetchData();
        // setAllProduct(res?.data?.data);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const selectHandler = (e) => {
    let color = e.map((e) => e.value);
    setProduct({ ...product, color: color });
  };

  const checkHandler = (e) => {
    if (product.size.includes(e)) {
      let filterData = product?.size.filter((ele) => ele !== e);
      setProduct({ ...product, size: filterData });
    } else {
      setProduct({ ...product, size: [...product?.size, e] });
    }
  };

  const CustomColorOption = ({ innerProps, label, data }) => (
    <div
      {...innerProps}
      style={{
        padding: "0px 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #dee2e6",
        background: "#dee9",
        cursor: "pointer",
      }}
    >
      {label}
      <div
        style={{
          backgroundColor: data.value,
          width: "20px",
          height: "20px",
          marginRight: "8px",
          borderRadius: "50%",
        }}
      ></div>
       <div>
    <img src={data?.img} alt="" style={{ width: "40px",
          height: "40px",}} />
      </div>
    </div>
  );
  return (
    <div>
      <div className="m-auto w-100">
        <Button color="danger" onClick={blankForm}>
          Add Product
        </Button>
      </div>
      <Modal isOpen={modal} toggle={toggle} backdrop="bool">
        <ModalHeader className="text-center" toggle={toggle}>
          Product Form
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => submitHandler(e)}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter Title"
                type="text"
                value={product?.title}
                onChange={(e) =>
                  setProduct({ ...product, title: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                id="description"
                placeholder="Enter description"
                type="text"
                value={product?.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="brand">Brand</Label>
              <Input
                id="brand"
                placeholder="Enter brand"
                type="text"
                value={product?.brand}
                onChange={(e) =>
                  setProduct({ ...product, brand: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup tag="fieldset">
              <Label>Gender</Label>
              <div className="d-flex w-100 gap-3">
                <FormGroup>
                  <Input
                    type="radio"
                    className="me-2"
                    checked={product.gender === "male"}
                    onChange={() => setProduct({ ...product, gender: "male" })}
                  />
                  <Label>Male</Label>
                </FormGroup>
                <FormGroup disabled>
                  <Input
                    type="radio"
                    className="me-2"
                    checked={product?.gender === "female"}
                    onChange={() =>
                      setProduct({ ...product, gender: "female" })
                    }
                  />
                  <Label>Female</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="radio"
                    className="me-2"
                    checked={product?.gender === "kids"}
                    onChange={() => setProduct({ ...product, gender: "kids" })}
                  />
                  <Label>Kids</Label>
                </FormGroup>
              </div>
            </FormGroup>

            {/* <FormGroup>
              <Label for="color">Color</Label>
              <Select
                id="color"
                isMulti
                options={colorOptions}
                value={product.color?.map((e) => {
                  return {
                    value: e,
                    label: e.toUpperCase().charAt(0) + e.slice(1),
                  };
                })}
                onChange={(e) => selectHandler(e, "color")}
              />
            </FormGroup> */}

            <FormGroup>
              <Label for="color">Color</Label>
              <Select
                id="color"
                isMulti
                options={data}
                value={product.color?.map((e) => {
                  return {
                    value: e,
                    label: (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                          style={{
                            height: "20px",
                            width: "20px",
                            borderRadius: "50%",
                            marginRight: "5px",
                            backgroundColor: e,
                            
                          }}
                        />

                        {e.charAt(0).toUpperCase() + e.slice(1)}
                      </div>
                    ),
                  };
                })}
                onChange={(e) => selectHandler(e, "color")}
                components={{ Option: CustomColorOption }}
              />
            </FormGroup>

            <FormGroup>
              <Label for="category">Category</Label>
              <Select
                id="category"
                isMulti
                options={categoryOptions}
                value={product.category?.map((ele) => {
                  return {
                    value: ele,
                    label: ele.toUpperCase().charAt(0) + ele.slice(1),
                  };
                })}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    category: e.map((ele) => ele.value),
                  })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                id="price"
                placeholder="Enter price"
                type="number"
                value={product?.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="discountPercentage">Discount</Label>
              <Input
                id="discountPercentage"
                placeholder="Enter brand"
                type="number"
                value={product?.discountPercentage}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    discountPercentage: e?.target?.value,
                  })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="thumbnail">Image</Label>
              <Input
                id="thumbnail"
                placeholder="Enter image"
                value={product?.thumbnail}
                type="text"
                onChange={(e) =>
                  setProduct({ ...product, thumbnail: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="availableStock">Available Stock</Label>
              <Input
                id="availableStock"
                placeholder="Enter brand"
                type="number"
                value={product?.availableStock}
                onChange={(e) =>
                  setProduct({ ...product, availableStock: e?.target?.value })
                }
              />
            </FormGroup>
            <Label for="checkBox40">Size</Label>
            <FormGroup className="d-flex gap-2">
              {["41", "42", "43", "44", "45"]?.map?.((e) => {
                return (
                  <div>
                    <Input
                      id="checkBox40"
                      type="checkbox"
                      checked={product?.size?.includes?.(e)}
                      onChange={() => checkHandler(e)}
                      className="me-2"
                    />
                    <Label for="checkBox40">{e}</Label>
                  </div>
                );
              })}
            </FormGroup>
            {updateMode ? (
              <Button
                color="danger"
                className="w-100"
                onClick={() => updateData()}
              >
                Update
              </Button>
            ) : (
              <Button color="danger" className="w-100">
                Submit
              </Button>
            )}
          </Form>
        </ModalBody>
      </Modal>
      <Table striped className="mt-4 ">
        <thead>
          <tr>
            <th>sr</th>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>Discout%</th>
            <th>Discount</th>
            <th>COLOR</th>
            <th>SIZE</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allProduct?.map?.((e, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>
                  <img style={{ height: "30px" }} src={e?.thumbnail} alt="" />
                </td>
                <td>{e?.title}</td>
                <td>{e?.price}</td>
                <td>{e?.discountPercentage}</td>

                <td>
                  {e.price -
                    ((e.price * e.discountPercentage) / 100).toFixed(2) ||
                    "discount not"}
                </td>
                <td>
                  <div className="d-flex gap-2">
                    {e?.color.map((color) => {
                      return (
                        <div
                          style={{
                            height: "10px",
                            width: "10px",
                            border: "1px solid black",
                            borderRadius: "50%",
                            backgroundColor: color,
                          }}
                        >
                          {}
                        </div>
                      );
                    })}
                  </div>
                </td>
                <td>
                  <div className="d-flex gap-2">
                    {sizeArr.map((ele) => {
                      return (
                        <div
                          style={{
                            padding: "2px 6px",
                            color: e.size.find((e) => e === ele)
                              ? "black"
                              : "lightgray",
                          }}
                        >
                          {ele}
                        </div>
                      );
                    })}
                  </div>
                </td>
                <td>
                  <Edit onClick={() => updateHandler(e)} />
                </td>
                <td>
                  <Trash color="Red" onClick={() => deleteHandler(e?._id)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import "./Model.css";
import { useNavigate } from "react-router-dom";

export default function ReviewModal({ modal, toggle }) {
  const [formData, setFormData] = useState({
    title: "",
    rating: "",
    description: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title === "" || formData.rating === "") {
      alert("Title and Rating are required fields.");
    } else {
      let oldData = JSON.parse(localStorage.getItem("input"))||[];
      let allData = [...oldData, formData];
      localStorage.setItem("input", JSON.stringify(allData));
    }
    toggle();
    navigate("/reviewShow");
  };

  return (
    <div>
      <div className="modeldiv ">
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Review</ModalHeader>
          <ModalBody>
            <div className="container">
              <div className="review-form">
                <h2>Give Review</h2>
                <Form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <Label>Title*</Label>
                    <Input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <Label>Rating*</Label>
                    <Input
                      type="number"
                      name="rating"
                      min="1"
                      max="5"
                      value={formData.rating}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <Label>Description</Label>
                    <Input
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="morebtn">
                    <button type="submit" className="btn submit-btn">
                      Submit
                    </button>
                    <button
                      type="button"
                      className="btn reset-btn"
                      onClick={() =>
                        setFormData({
                          title: "",
                          rating: "",
                          description: "",
                        })
                      }
                    >
                      Reset
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { FormGroup, Input, Label, Button, Form, Table } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function RegisterTask() {
  const initialData = {
    name: "",
    city: "",
    gender: "",
    password: "",
    confirmPassword: "",
    hobbies: [],
    phoneNumber: "",
    uploadImage: null,
  };

  const [formData, setFormData] = useState(initialData);
  const [users, setUsers] = useState([]);
 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios({
      method: "get",
      url: "https://exam.antimtechonologies.com/Signup.php",
      data:users
    })
      .then((res) => {
        setUsers(res.data);
        console.log("Fetched users:", res.data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        hobbies: checked
          ? [...prevData.hobbies, value]
          : prevData.hobbies.filter((hobby) => hobby !== value)
      }));
    } else if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        uploadImage: files[0]
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const form = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'hobbies') {
        formData[key].forEach(hobby => form.append('hobbies[]', hobby));
      } else {
        form.append(key, formData[key]);
      }
    });

    axios({
      method: "post",
      url: "https://exam.antimtechonologies.com/Signup.php",
      data:users
    })
      .then((res) => {
        setUsers(res.data);
        console.log("Fetched users:", res.data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <Label for="city">City</Label>
        <Input type="select" name="city" id="city" value={formData.city} onChange={handleChange}>
          <option>Select a city</option>
          <option>Surat</option>
          <option>Ahemdabad</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label>Gender</Label>
        <div>
          <FormGroup check>
            <Input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            <Label check>Male</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            <Label check>Female</Label>
          </FormGroup>
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          type="password"
        />
      </FormGroup>
      <FormGroup>
        <Label for="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Enter your confirm password"
          type="password"
        />
      </FormGroup>
      <FormGroup>
        <Label>Hobbies</Label>
        <div className="d-flex gap-2">
          {["cricket", "volleyball", "hockey"].map((hobby, i) => (
            <FormGroup check key={i}>
              <Input
                id={`hobby-${i}`}
                type="checkbox"
                name="hobbies"
                value={hobby}
                checked={formData.hobbies.includes(hobby)}
                onChange={handleChange}
              />
              <Label check for={`hobby-${i}`}>{hobby}</Label>
            </FormGroup>
          ))}
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="phoneNumber">Phone Number</Label>
        <Input
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter your phone number"
          type="tel"
        />
      </FormGroup>
      <FormGroup>
        <Label for="uploadImage">Upload Image</Label>
        <Input
          id="uploadImage"
          name="uploadImage"
          type="file"
          onChange={handleChange}
        />
      </FormGroup>
      <Button type="submit" color="primary">Submit</Button>
      <Table striped>
        <thead>
          <tr>
            <th>SR.</th>
            <th>NAME</th>
            <th>CITY</th>
            <th>GENDER</th>
            <th>PASSWORD</th>
            <th>CONFIRM PASSWORD</th>
            <th>HOBBIES</th>
            <th>PHONE NUMBER</th>
            <th>UPLOAD IMAGE</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.city}</td>
              <td>{user.gender}</td>
              <td>{user.password}</td>
              <td>{user.confirmPassword}</td>
              <td>{user.hobbies}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.uploadImage ? user.uploadImage.name : ''}</td>
            </tr>
          ))}
        </tbody>  
      </Table>
    </Form>
  );
}

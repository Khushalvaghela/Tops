import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import "./Acordian.css";

export default function Acordion({ setFilter, filter }) {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const checkBoxHandler = (color, e) => {
    if (e.target?.checked) {
      setFilter({ ...filter, color: [...filter.color, color] });
    } else {
      let newArr = filter?.color?.filter((e) => e !== color);
      setFilter({ ...filter, color: newArr });
    }
  };

  const discountHandler = (discount, e) => {
    const selectedDiscount = parseInt(
      discount.replace("%", "").split("-")[0].trim()
    );
    if (e.target.checked) {
      setFilter({ ...filter, discountPercentage: selectedDiscount });
    } else {
      setFilter({ ...filter, discountPercentage: null });
    }
  };

  const categoryHandler = (category, e) => {
    if (e.target.checked) {
      setFilter((prevFilter) => ({
        ...prevFilter,
        category: [...(prevFilter.category || []), category],
      }));
    } else {
      const newArr = filter?.category?.filter((item) => item !== category);
      setFilter((prevFilter) => ({
        ...prevFilter,
        category: newArr,
      }));
    }
  };

  return (
    <div
      className="contener"
      style={{ position: "sticky", top: "20px", height: "500px", zIndex: "10" }}
    >
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">
            <b>Gender</b>
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <ul>
              <FormGroup>
                <div className="flex gap-3">
                  <FormGroup className="flex gap-1">
                    <Input
                      checked={filter.gender === "male"}
                      type="radio"
                      value="male"
                      onChange={(e) => {
                        setFilter({ ...filter, gender: e.target.value });
                      }}
                    />
                    <Label>Male</Label>
                  </FormGroup>
                  <FormGroup className="flex gap-1">
                    <Input
                      checked={filter.gender === "female"}
                      type="radio"
                      value="female"
                      onChange={(e) => {
                        setFilter({ ...filter, gender: e.target.value });
                      }}
                    />
                    <Label>Female</Label>
                  </FormGroup>
                  <FormGroup className="flex gap-1">
                    <Input
                      checked={filter.gender === "unisex"}
                      type="radio"
                      value="unisex"
                      onChange={(e) => {
                        setFilter({ ...filter, gender: e.target.value });
                      }}
                    />
                    <Label>unisex</Label>
                  </FormGroup>
                </div>
              </FormGroup>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
            <b>Price</b>
          </AccordionHeader>
          <AccordionBody accordionId="2">
            <form>
              <div>
                <label htmlFor="">min Price</label>
                <Input
                  id="exampleprice"
                  name="brand"
                  type="range"
                  min="2000"
                  max="10000"
                  value={filter?.price?.gt || ""}
                  onChange={(e) =>
                    setFilter({
                      ...filter,
                      price: { ...filter?.price, gt: e?.target?.value },
                    })
                  }
                />
                {filter.price?.gt} <br />
                <label htmlFor="">Max Price</label>
                <Input
                  id="exampleprice"
                  name="brand"
                  type="range"
                  min="2000"
                  max="10000"
                  value={filter?.price?.lt || ""}
                  onChange={(e) =>
                    setFilter({
                      ...filter,
                      price: { ...filter?.price, lt: e?.target?.value },
                    })
                  }
                />
                {filter.price?.lt} {/* Display the current value of price.lt */}
              </div>
            </form>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">
            <b>Category</b>
          </AccordionHeader>
          <AccordionBody accordionId="3">
            <ul>
              <li>
                <Input type="checkbox" />
                <label>Plastic </label>
              </li>
              <li>
                <Input type="checkbox" />
                <label>Silicone </label>
              </li>
              <li>
                <Input type="checkbox" />
                <label>Leather </label>
              </li>
              <li>
                <Input type="checkbox" />
                <label>Denim</label>
              </li>
              <li>
                <Input type="checkbox" />
                <label>Fabric</label>
              </li>
              <li>
                <Input type="checkbox" />
                <label>Metal </label>
              </li>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">
            <b>Strap Color</b>
          </AccordionHeader>
          <AccordionBody accordionId="4">
            <ul>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => checkBoxHandler("Black", e)}
                />
                <label>Black </label>
              </li>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => checkBoxHandler("White", e)}
                />

                <label>White </label>
              </li>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => checkBoxHandler("Blue", e)}
                />

                <label>Blue </label>
              </li>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => checkBoxHandler("Green", e)}
                />
                <label>Green </label>
              </li>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => checkBoxHandler("Rose Gold", e)}
                />
                <label>Rose Gold </label>
              </li>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => checkBoxHandler("Brown", e)}
                />
                <label>Brown </label>
              </li>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => checkBoxHandler("Red", e)}
                />
                <label>Red </label>
              </li>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => checkBoxHandler("Silver", e)}
                />
                <label>Silver </label>
              </li>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">
            <b>Discounts</b>
          </AccordionHeader>
          <AccordionBody accordionId="5">
            <ul>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => discountHandler("Upto 10% Off", e)}
                />
                <label>Upto 10% Off</label>
              </li>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => discountHandler("10% - 20% Off", e)}
                />
                <label>10% - 20% Off</label>
              </li>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => discountHandler("20% - 30% Off", e)}
                />
                <label>20% - 30% Off</label>
              </li>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => discountHandler("30% - 40% Off", e)}
                />
                <label>30% - 40% Off</label>
              </li>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => discountHandler("40% - 50% Off", e)}
                />
                <label>40% - 50% Off</label>
              </li>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => discountHandler("50% - 60% Off", e)}
                />
                <label>50% - 60% Off</label>
              </li>
            </ul>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="6">
            <b>Category</b>
          </AccordionHeader>
          <AccordionBody accordionId="6">
            <ul>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => categoryHandler("Formal", e)}
                  checked={filter?.category?.includes("Formal")}
                />
                <label>Formal </label>
              </li>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => categoryHandler("Chronograph", e)}
                  checked={filter?.category?.includes("Chronograph")}
                />
                <label>Chronograph</label>
              </li>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => categoryHandler("Digital", e)}
                  checked={filter?.category?.includes("Digital")}
                />
                <label>Digital </label>
              </li>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => categoryHandler("Sport", e)}
                  checked={filter?.category?.includes("Sport")}
                />
                <label>Sport</label>
              </li>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => categoryHandler("Leather", e)}
                  checked={filter?.category?.includes("Leather")}
                />
                <label>Leather</label>
              </li>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => categoryHandler("Vintage", e)}
                  checked={filter?.category?.includes("Vintage")}
                />
                <label>Vintage </label>
              </li>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => categoryHandler("Stainless Steel", e)}
                  checked={filter?.category?.includes("Stainless Steel")}
                />
                <label>Stainless Steel </label>
              </li>
              <li>
                <Input
                  type="checkbox"
                  onChange={(e) => categoryHandler("Silicone", e)}
                  checked={filter?.category?.includes("Silicone")}
                />
                <label>Silicone </label>
              </li>
            </ul>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

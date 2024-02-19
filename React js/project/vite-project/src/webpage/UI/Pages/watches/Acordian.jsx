import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

function Example(props) {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">
            <b>Gender</b>
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <ul>
              <li>
                <input type="checkbox" />
                <label>Guys (195)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Girls (483)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Couple (4)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Unisex (196)</label>
              </li>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
            <b>Price</b>
          </AccordionHeader>
          <AccordionBody accordionId="2">
            <form>
              <input type="range" id="vol" name="vol" min="0" max="50" />
            </form>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">
            <b>Strap Material</b>
          </AccordionHeader>
          <AccordionBody accordionId="3">
            <ul>
              <li>
                <input type="checkbox" />
                <label>Plastic (73)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Silicone (237)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Leather (300)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Denim (6)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Fabric (9)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Metal (147)</label>
              </li>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
            <b>Strap Color</b>
          </AccordionHeader>
          <AccordionBody accordionId="2">
            <ul>
              <li>
                <input type="checkbox" />
                <label>Black (287)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>White (15)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Blue (146)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Green (53)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Grey (47)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Golden (13)</label>
              </li>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
            <b>Discounts</b>
          </AccordionHeader>
          <AccordionBody accordionId="2">
            <ul>
              <li>
                <input type="checkbox" />
                <label>Upto 10% Off (151)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>10% - 20% Off (172)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>20% - 30% Off (89)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>30% - 40% Off (54)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>40% - 50% Off (68)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>50% - 60% Off (20)</label>
              </li>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
            <b>Function</b>
          </AccordionHeader>
          <AccordionBody accordionId="2">
            <ul>
              <li>
                <input type="checkbox" />
                <label>Analog (26)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Analog Digital (1)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Analog Moonphase (1)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>30% - 40% Off (54)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>40% - 50% Off (68)</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>50% - 60% Off (20)</label>
              </li>
            </ul>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Example;

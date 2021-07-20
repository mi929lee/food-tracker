import { useState } from "react";
import FormItem from "./FormItem";

const InventoryForm = ({ addInventoryItem }) => {
  const [list, setList] = useState("need to buy");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [tags, setTags] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (!title) return;
    addInventoryItem({
      id: Math.random(),
      title: title,
      date: date,
      quantity: quantity,
      tags: tags,
    });
  };

  return (
    <div id="inventoryForm">
      <div className="row mx-2">
        <div className="col">
          <FormItem
            title="name of item"
            placeholder="ex: cheerios"
            id="name"
            handleChange={setTitle}
          />
        </div>
        <div className="col">
          <FormItem
            title="quantity"
            placeholder="ex: 2"
            id="quantity"
            handleChange={setQuantity}
          />
        </div>
      </div>

      <div className="row mx-2">
        <div className="col">
          <FormItem
            title="type"
            placeholder="ex: snacks"
            id="type"
            handleChange={setTags}
          />
        </div>
        <div className="col">
          <FormItem
            title="expiration date"
            placeholder="ex: 2022-05-31"
            id="expiration"
            handleChange={setDate}
          />
        </div>
      </div>

      <div className="row mx-2">
        <div className="col">
          <FormItem
            title="location"
            placeholder="ex: in front of the white TV"
            id="location"
            handleChange={setLocation}
          />
        </div>
        <div className="col">
          <div className="input-group mb-3">
            <div className="file">
              <input type="file" className="form-control" />
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-2">
        <div className="col">
          <FormItem
            title="notes"
            placeholder="ex: get the family size"
            id="notes"
            handleChange={setDescription}
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-danger float-end me-4"
        id="submit"
        onClick={() =>
          addInventoryItem({
            title: title,
            date: date,
            quantity: quantity,
            tags: tags,
          })
        }
      >
        add to inventory
      </button>
    </div>
  );
};

export default InventoryForm;

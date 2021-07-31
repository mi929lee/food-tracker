import { useState } from "react";
import FormItem from "./FormItem";
import firebase from "firebase/app";
import "firebase/firestore";

const InventoryForm = ({ addInventoryItem, inventoryList }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [tags, setTags] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      setError("please enter the name of the item");
      return;
    }
    // if (inventoryList[title] == title) {
    //   setError("'" + title + "' already exists in inventory");
    //   return;
    // }
    addInventoryItem({
      id: Math.random(),
      title,
      quantity: quantity && parseInt(quantity) > 0 ? parseInt(quantity) : 0,
      tags: tags ? tags.split(" ") : [],
      date,
      location,
      description,
    });

    firebase
      .firestore()
      .collection("InventoryList")
      .add({
        title,
        quantity: parseInt(quantity),
        tags: tags ? tags.split(" ") : [],
        date,
        location,
        description,
      })
      .then(() => {
        setTitle("");
        setQuantity(0);
        setTags("");
        setDate("");
        setLocation("");
        setDescription("");
        setError("");
      });
  };

  return (
    <form id="inventory-form" onSubmit={handleSubmit}>
      <div className="row mx-2">
        <div className="col">
          <FormItem
            title="name of item"
            placeholder="ex: cheerios"
            id="name"
            handleChange={setTitle}
            state={title}
          />
        </div>
        <div className="col">
          <div className="input-group mb-3">
            <span className="input-group-text">quantity</span>
            <input
              className="form-control"
              type="number"
              placeholder="ex: 2"
              id="quantity"
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            />
          </div>
        </div>
      </div>

      <div className="row mx-2">
        <div className="col">
          <FormItem
            title="type"
            placeholder="ex: snacks"
            id="type"
            handleChange={setTags}
            state={tags}
          />
        </div>
        <div className="col">
          <div className="input-group mb-3">
            <span className="input-group-text">expiration date</span>
            <input
              className="form-control"
              type="date"
              placeholder="ex: 2022-05-31"
              id="expiration"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>
        </div>
      </div>

      <div className="row mx-2">
        <div className="col">
          <FormItem
            title="location"
            placeholder="ex: in front of the white TV"
            id="location"
            handleChange={setLocation}
            state={location}
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
            state={description}
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary float-end me-4"
        id="submit"
      >
        add to inventory
      </button>
      <p className="text-danger p-2 me-2 float-end">
        <strong>{error}</strong>
      </p>
    </form>
  );
};

export default InventoryForm;

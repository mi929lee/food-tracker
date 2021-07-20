import { useState } from "react";
import FormItem from "./FormItem";

const WishForm = ({ addWishItem, wishList }) => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState("");
  const [person, setPerson] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      setError("please enter the name of the item");
      return;
    }
    // if (Object.values(wishList).indexOf(title) > -1) {
    //   setError("'" + title + "' already exists in your wish list");
    //   return;
    // }
    addWishItem({
      id: Math.random(),
      title,
      quantity,
      tags,
      person,
      location,
    });

    setTitle("");
    setQuantity("");
    setTags("");
    setPerson("");
    setLocation("");
    setDescription("");
  };

  return (
    <form id="wish-form" onSubmit={handleSubmit}>
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
          <FormItem
            title="quantity"
            placeholder="ex: 2"
            id="quantity"
            handleChange={setQuantity}
            state={quantity}
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
            state={tags}
          />
        </div>
        <div className="col">
          <FormItem
            title="who wants"
            placeholder="ex: michelle"
            id="who-buy"
            handleChange={setPerson}
            state={person}
          />
        </div>
      </div>

      <div className="row mx-2">
        <div className="col">
          <FormItem
            title="where to buy"
            placeholder="ex: safeway"
            id="where-to-buy"
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
        add to wish list
      </button>
      <p className="text-danger p-2 me-2 float-end">
        <strong>{error}</strong>
      </p>
    </form>
  );
};

export default WishForm;

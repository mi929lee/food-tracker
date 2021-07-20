import { useState } from "react";
import FormItem from "./FormItem";

const WishForm = ({ addInventoryItem, addWishItem }) => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState("");
  const [person, setPerson] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div id="wishForm">
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
            title="where to buy"
            placeholder="ex: safeway"
            id="where-to-buy"
            handleChange={setLocation}
          />
        </div>
        <div className="col">
          <FormItem
            title="who buys"
            placeholder="ex: michelle"
            id="who-buy"
            handleChange={setPerson}
          />
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
          addWishItem({
            title,
            person,
            quantity,
            tags,
          })
        }
      >
        add to wish list
      </button>
    </div>
  );
};

export default WishForm;

import { useState } from "react";

const FormItem = ({ tag, id, handleChange }) => (
  <div className="control">
    <label className="label">{tag}</label>
    <div className="has-icons-left">
      <input
        className="input"
        type="text"
        placeholder={tag}
        id={id}
        onChange={(e) => handleChange(e.target.value)}
      />
      <span className="icon is-small is-left">
        <i className="fas fa-envelope"></i>
      </span>
    </div>
  </div>
);

const Form = ({ addOwnedItem, addBuyItem }) => {
  const [name, setName] = useState("");
  const [expiration, setExpiration] = useState("");
  const [quantity, setQuantity] = useState("");
  const [type, setType] = useState("");
  const [list, setList] = useState("need to buy");

  return (
    <div className="field" id="add-item">
      <span className="is-size-3 has-text-weight-bold">add new item</span>
      <br />
      <br />
      <br />
      <div className="columns is-multiline">
        <div className="column is-half py-0">
          <FormItem tag="name of item" id="name" handleChange={setName} />
        </div>
        <div className="column is-half py-0">
          <FormItem
            tag="expiration date"
            id="expiration"
            handleChange={setExpiration}
          />
        </div>
        <div className="column is-half py-0">
          <FormItem tag="quantity" id="quantity" handleChange={setQuantity} />
        </div>
        <div className="column is-half py-0">
          <FormItem tag="type" id="type" handleChange={setType} />
        </div>
        <div className="column is-half py-0">
          <FormItem tag="where to buy" id="where-to-buy" />
        </div>
        <div className="column is-half py-0">
          <FormItem tag="who buys" id="who-buy" />
        </div>
        <div className="column is-half py-0">
          <div className="control">
            <label className="label">list to add item to</label>
            <div className="select">
              <select id="list" onChange={(e) => setList(e.target.value)}>
                <option>need to buy</option>
                <option>owned</option>
              </select>
            </div>
          </div>
        </div>
        <div className="column is-half py-0">
          <button
            type="submit"
            className="button is-warning"
            id="submit"
            onClick={() =>
              list === "owned"
                ? addOwnedItem({
                    name: name,
                    expiration: expiration,
                    qty: quantity,
                    type: type,
                  })
                : addBuyItem({
                    name: name,
                    expiration: expiration,
                    qty: quantity,
                    type: type,
                  })
            }
          >
            add item
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;

import { useState } from "react";

const FormItem = ({ title, placeholder, id, handleChange }) => (
  <div className="control">
    <label className="label">{title}</label>
    <div className="has-icons-left">
      <input
        className="input"
        type="text"
        placeholder={placeholder}
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
  const [list, setList] = useState("need to buy");
  const [name, setName] = useState("");
  const [expiration, setExpiration] = useState("");
  const [dateNeeded, setDateNeeded] = useState("");
  const [quantity, setQuantity] = useState("");
  const [units, setUnits] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [whoBuys, setWhoBuys] = useState("");
  const [whereBuy, setWhereBuy] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="field" id="add-item">
      <span className="is-size-3 has-text-weight-bold">add new item</span>
      <br />
      <br />
      <br />
      <div className="columns is-multiline">
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
          <FormItem title="name of item" placeholder="ex: cheerios" id="name" handleChange={setName} />
        </div>
        {list === "owned" && (
          <div className="column is-half py-0">
            <FormItem
              title="expiration date"
              placeholder="ex: 2022-05-31"
              id="expiration"
              handleChange={setExpiration}
            />
          </div>
        )}
        {list === "need to buy" && (
          <div className="column is-half py-0">
            <FormItem
              title="date needed by"
              placeholder="ex: 2021-07-31"
              id="date-needed"
              handleChange={setDateNeeded}
            />
          </div>
        )}
        <div className="column is-half py-0">
          <FormItem title="price" placeholder="ex: $3.99" id="price" handleChange={setPrice} />
        </div>
        <div className="column is-half py-0">
          <FormItem title="quantity" placeholder="ex: 2" id="quantity" handleChange={setQuantity} />
        </div>
        <div className="column is-half py-0">
          <FormItem title="units" placeholder="ex: boxes" id="units" handleChange={setUnits} />
        </div>
        <div className="column is-half py-0">
          <FormItem title="type" placeholder="ex: snacks" id="type" handleChange={setType} />
        </div>
        
        <div className="column is-half py-0">
          <div className="control mb-5">
            <label className="label">image</label>
            <div className="file">
              <label className="file-label">
                <input type="file" className="file-input"/>
                <span className="file-cta">
                  {/* <span className="file-icon">
                    <i className="fas fa-upload"></i>
                  </span> */}
                  <span className="file-label">select an image</span>
                </span>
              </label>
            </div>
          </div>
        </div>
          

        {list === "need to buy" && (
          <div className="column is-half py-0">
            <FormItem title="where to buy" placeholder="ex: safeway" id="where-to-buy" handleChange={setWhereBuy}/>
          </div>
        )}
        {list === "need to buy" && (
          <div className="column is-half py-0">
            <FormItem title="who buys" placeholder="ex: michelle" id="who-buy" handleChange={setWhoBuys}/>
          </div>
        )}
        {list === "owned" && (
          <div className="column is-half py-0">
            <FormItem title="location" placeholder="ex: in front of the white TV" id="location" handleChange={setLocation}/>
          </div>
        )}
        <div className="column is-half py-0">
          <FormItem title="notes" placeholder="ex: get the family size" id="notes" handleChange={setNotes} />
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

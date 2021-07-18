import { useState } from "react";
// import Accordion from "react-bootstrap/Accordion";

const FormItem = ({ title, placeholder, id, handleChange }) => (
  <div className="input-group mb-3">
    <span className="input-group-text">{title}</span>
    <input
      className="form-control"
      type="text"
      placeholder={placeholder}
      id={id}
      onChange={(e) => handleChange(e.target.value)}
    />
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
    // <div className="accordion">
    <div className="container-fluid px-3 py-3" id="add-item">
      <div className="row mx-2">
        <h2 className="my-4">add new item</h2>
      </div>
      <div className="row mx-2">
        <div className="col">
          <div className="input-group mb-3">
            <label className="input-group-text" for="list">
              list to add item to
            </label>
            {/* <div className="select"> */}
            <select
              className="form-select"
              id="list"
              onChange={(e) => setList(e.target.value)}
            >
              <option selected>need to buy</option>
              <option>owned</option>
            </select>
            {/* </div> */}
          </div>
        </div>
        <div className="col">
          <FormItem
            title="name of item"
            placeholder="ex: cheerios"
            id="name"
            handleChange={setName}
          />
        </div>
      </div>
      <div className="row mx-2">
        {list === "owned" && (
          <div className="col">
            <FormItem
              title="expiration date"
              placeholder="ex: 2022-05-31"
              id="expiration"
              handleChange={setExpiration}
            />
          </div>
        )}
        {list === "need to buy" && (
          <div className="col">
            <FormItem
              title="date needed by"
              placeholder="ex: 2021-07-31"
              id="date-needed"
              handleChange={setDateNeeded}
            />
          </div>
        )}
        <div className="col">
          <FormItem
            title="price"
            placeholder="ex: $3.99"
            id="price"
            handleChange={setPrice}
          />
        </div>
      </div>
      <div className="row mx-2">
        <div className="col">
          <FormItem
            title="quantity"
            placeholder="ex: 2"
            id="quantity"
            handleChange={setQuantity}
          />
        </div>
        <div className="col">
          <FormItem
            title="units"
            placeholder="ex: boxes"
            id="units"
            handleChange={setUnits}
          />
        </div>
      </div>
      <div className="row mx-2">
        <div className="col">
          <FormItem
            title="type"
            placeholder="ex: snacks"
            id="type"
            handleChange={setType}
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
        {list === "need to buy" && (
          <div className="col">
            <FormItem
              title="where to buy"
              placeholder="ex: safeway"
              id="where-to-buy"
              handleChange={setWhereBuy}
            />
          </div>
        )}
        {list === "need to buy" && (
          <div className="col">
            <FormItem
              title="who buys"
              placeholder="ex: michelle"
              id="who-buy"
              handleChange={setWhoBuys}
            />
          </div>
        )}

        {list === "owned" && (
          <div className="col">
            <FormItem
              title="location"
              placeholder="ex: in front of the white TV"
              id="location"
              handleChange={setLocation}
            />
          </div>
        )}
      </div>

      <div className="row mx-2">
        <div className="col">
          <FormItem
            title="notes"
            placeholder="ex: get the family size"
            id="notes"
            handleChange={setNotes}
          />
        </div>
      </div>

      {/* <div className="row">
        <div className="col float-end"> */}
          <button
            type="submit"
            className="btn btn-danger float-end me-4"
            id="submit"
            onClick={() =>
              list === "owned"
                ? addOwnedItem({
                    name: name,
                    expiration: expiration,
                    qty: quantity,
                    type: type,
                    // idx: idx
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
        {/* </div>
      </div> */}
    </div>
    //{" "}
  );
};

export default Form;

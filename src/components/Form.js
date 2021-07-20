import { useState } from "react";
import InventoryForm from "./InventoryForm";
import WishForm from "./WishForm";

const Form = ({ addInventoryItem, addWishItem }) => {
  const [list, setList] = useState("wish list");

  return (
    <div className="container-fluid px-3 py-3" id="add-item">
      <div className="row mx-2">
        <div className="col-10">
          <h2 className="my-4">add new item</h2>
        </div>
        <div className="col-2 my-4">
          <button className="btn" onClick={(e) => setList("wish list")}>wish list</button>
          <button className="btn" onClick={(e) => setList("inventory")}>inventory</button>
        </div>
      </div>

      {list === "inventory" && (
        <InventoryForm addInventoryItem={addInventoryItem} />
      )}

      {list === "wish list" && <WishForm addWishItem={addWishItem} />}
    </div>
  );
};

export default Form;

import { useState } from "react";
import WishList from "./components/WishList";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import InventoryList from "./components/InventoryList";

const App = () => {
  const [inventoryList, setInventoryList] = useState([
    {
      id: Math.random(),
      title: "frosted flakes",
      quantity: "1",
      tags: "snacks",
      date: "2021-06-31",
      location: "in front of tv",
      
    },
    {
      id: Math.random(),
      title: "avocados",
      quantity: "4",
      tags: "fruit",
      date: "2021-03-14",
      location: "refrigerator",
    },
    {
      id: Math.random(),
      title: "eggs",
      quantity: "72",
      tags: "dairy",
      date: "2021-03-14",
      location: "refrigerator",
    },
  ]);

  const [wishList, setWishList] = useState([
    {
      id: Math.random(),
      title: "cocoa puffs",
      quantity: "1",
      tags: "snacks",
      person: "jacky",
      location: "safeway"
    },
    {
      id: Math.random(),
      title: "lucky charms",
      quantity: "2",
      tags: "snacks",
      person: "nicole",
      location: "safeway"
    },
    {
      id: Math.random(),
      title: "oreo o's",
      quantity: "1",
      tags: "snacks",
      person: "michelle",
      location: "safeway"
    },
  ]);

  const addInventoryItem = (row) => setInventoryList([...inventoryList, row]);
  const addWishItem = (row) => setWishList([...wishList, row]);

  const deleteInventoryItem = (id) => {
    const rows = inventoryList.filter((item) => {
      return id !== item.id;
    });
    setInventoryList(rows);
  };
  const deleteWishItem = (id) => {
    const rows = wishList.filter((item) => {
      return id !== item.id;
    });
    setWishList(rows);
  };

  return (
    <div className="App">
      <Header />
      <Form
        addInventoryItem={addInventoryItem}
        inventoryList={inventoryList}
        addWishItem={addWishItem}
        wishList={wishList}
      />
      <section className="container-fluid mt-5 mb-5">
        <div className="row m-2">
          <div className="col">
            <InventoryList
              rows={inventoryList}
              deleteInventoryItem={deleteInventoryItem}
            />
          </div>
          <div className="col">
            <WishList rows={wishList} deleteWishItem={deleteWishItem} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;

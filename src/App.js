import { useState } from "react";
import WishList from "./components/WishList";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import InventoryList from "./components/InventoryList";


const App = () => {
  const [inventoryList, setInventoryList] = useState([
    {
      title: "frosted flakes",
      date: "2021-06-31",
      quantity: "1",
      tags: "snacks"
    },
    {
      title: "avocados",
      date: "2021-03-14",
      quantity: "4",
      tags: "fruit"
    },
    {
      title: "eggs",
      date: "2021-03-14",
      quantity: "72",
      tags: "dairy"
    },
  ]);

  const [wishList, setWishList] = useState([
    {
      title: "cocoa puffs",
      date: "2021-06-31",
      quantity: "1",
      tags: "snacks",
    },
    {
      title: "lucky charms",
      date: "2021-03-14",
      quantity: "2",
      tags: "snacks",
    },
    {
      title: "oreo o's",
      date: "2021-08-28",
      quantity: "5",
      tags: "snacks",
    },
  ]);

  const addInventoryItem = (row) => setInventoryList([...inventoryList, row]);
  const addWishItem = (row) => setWishList([...wishList, row]);

  const deleteInventoryItem = (title) => {
    const rows = inventoryList.filter(item => {
      return title !== item.title
    });
    setInventoryList(rows);
  };
  const deleteWishItem = (title) => {
    const rows = wishList.filter(item => {
      return title !== item.title
    });
    setWishList(rows);
  };

  return (
    <div className="App">
      <Header />
      <Form addInventoryItem={addInventoryItem} addWishItem={addWishItem} />
      <section className="container-fluid mt-4 mb-5">
        <div className="row m-2">
          <div className="col">
            <InventoryList rows={inventoryList} deleteInventoryItem={deleteInventoryItem} />
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

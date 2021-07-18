import { useState } from "react";
import BuyList from "./components/BuyList";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import OwnedList from "./components/OwnedList";


const App = () => {
  const [ownedItems, setOwnedItems] = useState([
    {
      name: "frosted flakes",
      expiration: "2021-06-31",
      qty: "1",
      type: "snacks"
    },
    {
      name: "avocados",
      expiration: "2021-03-14",
      qty: "4",
      type: "fruit"
    },
    {
      name: "eggs",
      expiration: "2021-03-14",
      qty: "72",
      type: "dairy"
    },
  ]);

  const [buyItems, setBuyItems] = useState([
    {
      name: "cocoa puffs",
      expiration: "2021-06-31",
      qty: "1",
      type: "snacks",
    },
    {
      name: "lucky charms",
      expiration: "2021-03-14",
      qty: "2",
      type: "snacks",
    },
    {
      name: "oreo o's",
      expiration: "2021-08-28",
      qty: "5",
      type: "snacks",
    },
  ]);

  const addOwnedItem = (row) => setOwnedItems([...ownedItems, row]);
  const addBuyItem = (row) => setBuyItems([...buyItems, row]);

  const deleteOwned = (name) => {
    const rows = ownedItems.filter(item => {
      return name !== item.name
    });
    setOwnedItems(rows);
  };
  const deleteBuy = (name) => {
    const rows = buyItems.filter(item => {
      return name !== item.name
    });
    setBuyItems(rows);
  };

  return (
    <div className="App">
      <Header />
      <Form addOwnedItem={addOwnedItem} addBuyItem={addBuyItem} />
      <section className="container-fluid mt-4 mb-5">
        <div className="row m-2">
          <div className="col">
            <OwnedList rows={ownedItems} deleteOwned={deleteOwned} />
          </div>
          <div className="col">
            <BuyList rows={buyItems} deleteBuy={deleteBuy} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;

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
      type: "snacks",
    },
    {
      name: "cheerois",
      expiration: "2021-03-14",
      qty: "9",
      type: "snacks",
    },
    {
      name: "cheerois",
      expiration: "2021-03-14",
      qty: "9",
      type: "snacks",
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

  return (
    <div className="App">
      <Header />
      <Form addOwnedItem={addOwnedItem} addBuyItem={addBuyItem} />
      <section className="section">
        <div className="columns">
          <div className="column">
            <OwnedList rows={ownedItems} />
          </div>
          <div className="column">
            <BuyList rows={buyItems} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;

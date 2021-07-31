import { useEffect, useState } from "react";
import WishList from "./components/WishList";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import InventoryList from "./components/InventoryList";

import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAcGOj84HiCQR-Qz_KijwkrPnKrO7IjJgM",
  authDomain: "food-tracker-4c162.firebaseapp.com",
  projectId: "food-tracker-4c162",
  storageBucket: "food-tracker-4c162.appspot.com",
  messagingSenderId: "153863168250",
  appId: "1:153863168250:web:bf889a5ebe32bb34e66943",
  measurementId: "G-6XRED8YZPJ",
});
// const firestore = firebase.firestore();
// const temp = firestore.collection("InventoryList");

// temp.get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id);
//     console.log(doc.data());
//   });
// });

// temp.add({
//   title: "avocados",
//   quantity: "4",
//   tags: "fruit",
//   date: "2021-03-14",
//   location: "garage",
//   description: "hello",
// })
// .then((docRef) => {
//   console.log('document written with ID ', docRef.id);
// })
// .catch((error) => {
//   console.error('error adding document ', error);
// });

// temp.doc('c645e20R2OJb5MR0FV3o').delete().then(() => {
//   console.log('document successfully deleted!');
// }).catch((error) => {
//   console.error('error removing document', error);
// })

const App = () => {
  const [inventoryList, setInventoryList] = useState([
    {
      id: Math.random(),
      title: "frosted flakes",
      quantity: "1",
      tags: ["snacks"],
      date: "2021-06-31",
      location: "in front of tv",
      description: "n/a",
    },
    {
      id: Math.random(),
      title: "avocados",
      quantity: "4",
      tags: ["fruit"],
      date: "2021-03-14",
      location: "garage",
      description: "n/a",
    },
    {
      id: Math.random(),
      title: "eggs",
      quantity: "72",
      tags: ["dairy"],
      date: "2021-03-14",
      location: "refrigerator",
      description: "n/a",
    },
  ]);

  const [wishList, setWishList] = useState([
    {
      id: Math.random(),
      title: "cocoa puffs",
      quantity: "1",
      tags: ["snacks"],
      person: "jacky",
      location: "target",
      description: "n/a",
    },
    {
      id: Math.random(),
      title: "lucky charms",
      quantity: "2",
      tags: ["snacks"],
      person: "nicole",
      location: "costco",
      description: "n/a",
    },
    {
      id: Math.random(),
      title: "oreo o's",
      quantity: "1",
      tags: ["snacks"],
      person: "michelle",
      location: "safeway",
      description: "n/a",
    },
  ]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("InventoryList")
      .get()
      .then((querySnapshot) => {
        const list = [];
        querySnapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            ...doc.data(),
            date: doc.data().date.toDate().toDateString(),
          });
        });
        setInventoryList(list);
      });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("WishList")
      .get()
      .then((querySnapshot) => {
        const list = [];
        querySnapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            ...doc.data()
          });
        });
        setWishList(list);
      });
    return unsubscribe;
  }, []);

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
        <a href="#" className="btn float-end bg-info pb-1 pt-2 rounded-pill">
          ^
        </a>
      </section>
      <br />
      <Footer />
    </div>
  );
};

export default App;

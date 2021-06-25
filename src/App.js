import React, {useState} from 'react'
import FormItem from './Form'
import FileUpload from "./Image"
import Item from "./Item"

function App() {
  const [tags, setTags] = useState([
    "name of item",
    "quantity",
    "expiration date",
    "type",
    "image",
    "where to buy",
    "who buys"
  ])

  // const [items, setItems] = useState([
  //   {name: "frosted flakes", expiration: "2021-06-31", qty: "1", type: "snacks"}
  // ])
  const myExp = "ailweuhfalwiefwhfiufhf"
  return (
    <div className="App">
      <nav className="navbar is-light">
        lee family food tracker
        <img src="/family_photo.jpg" alt="family photo" />
      </nav>

      <div className="field"> 
        <span className="is-size-3 has-text-weight-bold">add new item</span>
        <br /><br /><br />
        <div className="columns">
          <div className="column">
            {/* <left_form attributes_left = {attributes_left}/> */}
            <FormItem tag="name of item"/>
            <FormItem tag="expiration date"/>
            <FormItem tag="quantity"/>
            <FormItem tag="type"/>
            {tags.map(tag => <FormItem tag={tag}/>)}
          </div>
          <div className="column">
            <FileUpload/>
            <FormItem tag="where to buy"/>
            <FormItem tag="who buys"/>
            <button className="button is-warning">add item</button>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="columns">
          <div className="column">
            <span className="is-size-3 has-text-weight-semibold">owned</span>
            <table className="table is-hoverable">
              <thead>
                <tr>
                  <th><abbr title="name"></abbr>name</th>
                  <th><abbr title="expiration"></abbr>expiration</th>
                  <th><abbr title="qty"></abbr>qty</th>
                  <th><abbr title="type"></abbr>type</th>
                </tr>
              </thead>
              <tbody>
                <Item />
                <Item />
                <Item />
                <Item />
              </tbody>
            </table>
          </div>
          <div className="column">
            <span className="is-size-3 has-text-weight-semibold">need to buy</span>
            <table className="table is-hoverable">
              <thead>
                <tr>
                  <th><abbr title="name"></abbr>name</th>
                  <th><abbr title="expiration"></abbr>expiration</th>
                  <th><abbr title="qty"></abbr>qty</th>
                  <th><abbr title="type"></abbr>type</th>
                </tr>
              </thead>
              <tbody>
                {/* <Item item = {item_name = "frosted flakes", expiration = "2021-06-31", qty = "1", type = "snacks"} /> */}
                <Item />
                <Item />
                <Item />
                <Item name='test' expiration={myExp} qty={3} type="food"/>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="content">
          <p>michelle and nicole, 2021</p>   
        </div>
      </footer>
      
      
      {/* <script type="text/javascript" src="/node_modules/bulma-accordion/dist/js/bulma-accordion.min.js"></script> */}
      {/* https://wikiki.github.io/components/accordion/ */}
      {/* https://wikiki.github.io/layout/divider/ */}
    </div>
  );
}

export default App;
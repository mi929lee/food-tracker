import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './Card'

function App() {
  const styles = {'background-color': '#fff4cc'}
  const [titles, setTitles] = useState([
    "first",
    "second",
    "item",
    "something else",
    "something else",
    "something else",
  ])

  const clickHandler = () => {
    setTitles([...titles, "test"])
  }

  return (
    <div className="App">
      <nav className="navbar fixed-top navbar-light" style={styles}>
        <div className="container-fluid">
          <span>to do list</span>
        </div>
      </nav>

      <div className="container-fluid overall">
        <div className="row row-cols-1 row-cols-md-2 g-3 cards">
          {titles && titles.map(item => <Card title={item} />)}
        </div>
      </div>

      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}

export default App;

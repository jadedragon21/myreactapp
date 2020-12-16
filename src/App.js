// import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import Name from "./Name";
import Funfact from "./FunFact";
import ThingILike from "./ThingILike";
import Example from "./example";

function App() {
  
 

  return (
    <div className="App">  
    {/* you can remove classNamefrom the div to make the .... align  */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>What is the purpose of life?</h1>
      <h2>To live in the magic of now---Bgok!</h2>
      <MyComponent />
      <Name  customName="Merideth"/>
      <Name  customName="Merideth"/>
      <Name  customName="Lionel"/>
      <Funfact />
      <ThingILike />
      <Example />

    </div>
  );
}

export default App;

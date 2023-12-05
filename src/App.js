import './App.css';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList';

function App() {
  const produce = [
    {name: "Apple", type: "Fruit"},
    {name: "Pineapple", type: "Fruit"} ,
    {name: "Banana", type: "Fruit"},
    {name: "Pear", type: "Fruit"},
    {name: "Strawberry", type: "Fruit"},
    {name: "Orange", type: "Fruit"},
    {name: "Lettuce", type: "Vegetable"},
    {name: "Cucumber", type: "Vegetable"},
    {name: "Eggplant", type: "Vegetable"},
    {name: "Squash", type: "Vegetable"},
    {name: "Bell pepper", type: "Vegetable"},
    {name: "Onion", type: "Vegetable"}, 

  ];

  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld name="Your Name" />
        <Counter />
        <FilteredList items={produce} />
      </header>
    </div>
  );
}

export default App;

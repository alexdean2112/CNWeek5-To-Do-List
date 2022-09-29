import './App.css';
import Todo from "./components/Todo"

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1 className='maintitle'>My To-Do List</h1>
        <p>A simple to-do list, add an item using the input box.</p>
        <p>To mark as done just click arrow button.</p>
        <p>If you would like to delete an item click the dustbin.</p>
        <p>To edit an item click the quill icon.</p>
      </div>
      <Todo />
    </div>
  );
}

export default App;

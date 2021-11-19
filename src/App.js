import './App.css';
import Header from './components/Header/Header';
import InputAddTodo from './components/InputAddTodo/InputAddTodo';
import ButtonAddTodo from './components/ButtonAddTodo/ButtonAddTodo';
import List from './components/List/List';

function App() {
  return (
    <div className="App">
      <Header/> 
      
      <main>
        <InputAddTodo />
        <ButtonAddTodo />
        <List />
      </main>
    </div>  
  );
}

export default App;

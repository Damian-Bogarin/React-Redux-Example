import logo from './logo.svg';
import './App.css';
import  TodoContainers  from './components/containers/TodoContainers';
import TodoFormContainer from './components/containers/TodoFormContainer';
import FilterOptions from './components/pure/FilterOptions';




function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <TodoContainers></TodoContainers>
       <TodoFormContainer></TodoFormContainer>
       {/* Filter Options contain Filter Container */}
       <FilterOptions></FilterOptions>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import CounterFunction from './CounterFunction';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />

      <SayFunction />
      <hr />

      <CounterFunction value={'plus 1'} />
    </div>
  );
}

export default App;

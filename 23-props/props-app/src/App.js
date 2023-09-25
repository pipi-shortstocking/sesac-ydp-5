import './App.css';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <FunctionComponent name="새싹" />
      <FunctionComponent />

      <hr />
      <ClassComponent name="새싹" />
      <ClassComponent />

      <hr />
      <Button link="https://www.google.com">Google</Button>
    </div>
  );
}

export default App;

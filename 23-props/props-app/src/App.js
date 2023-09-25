import './App.css';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import Button from './Button';
import Class_Test1 from './Test';
import Class_Test2 from './Test2';

function App() {
  return (
    <div className="App">
      {/* <FunctionComponent name="새싹" />
      <FunctionComponent />

      <hr />
      <ClassComponent name="새싹" />
      <ClassComponent />

      <hr />
      <Button link="https://www.google.com">Google</Button> */}
      <Class_Test1 />
      <Class_Test2 />
    </div>
  );
}

export default App;

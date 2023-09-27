import logo from './logo.svg';
import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter';
import Handler_ex from './ex/Handler_ex';
import ColorChange from './ex/ColorChange';
import Disappear from './ex/disappear';

function App() {
  return (
    <div className="App">
      {/* <SyntheticEvent />
      <hr />

      <ClassBind />
      <hr />

      <Counter /> */}

      {/* 1 */}
      <Handler_ex />
      <hr />
      {/* 2 */}
      <ColorChange />
      <hr />
      {/* 3 */}
      <Disappear />
    </div>
  );
}

export default App;

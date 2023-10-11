import BugComponent from './BugComponent';
import CircleComponent from './CircleComponent';
import CssModuleComponents from './CssModuleComponents';
import PostList from './PostList';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>

      <h2>CSS Module</h2>
      <CssModuleComponents />

      <h2>SASS</h2>
      <SassComponent />

      <h2>styled-components</h2>
      <StyledComponent />

      <h2>실습 1.</h2>
      {/* <BugComponent /> */}

      <h2>실습 2.</h2>
      {/* <CircleComponent /> */}

      <h2>실습 3.</h2>
      <PostList />
    </div>
  );
}

export default App;

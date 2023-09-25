import './App.css';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import Button from './Button';
import Class_Test1 from './Test';
import Class_Test2 from './Test2';
import Food from './Food';
import Book from './Book';
import Text from './Text';

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
      {/* 컴포넌트 실습 */}
      {/* <Class_Test1 />
      <Class_Test2 /> */}
      {/* props 실습 */}
      {/* 1 */}
      <Food />
      {/* 2 */}
      <Book
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500"
        type="자기계발서"
      />
      {/* 3 */}
      <Text text="App 컴포넌트에서 넘겨준 text props입니다." />
    </div>
  );
}

export default App;

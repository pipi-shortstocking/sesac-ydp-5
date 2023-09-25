// import logo from './logo.svg';
import './App.css';
import './Larva.css';

function App() {
  // const name = '김정윤';
  const student = 'sesac';
  const styles = {
    backgroundColor: 'yellow',
    color: 'blue',
    fontSize: '48px',
  };

  const name = '애옹';
  const animal = '고양이';

  const a = 24;
  const b = 14;

  const title = 'Hello World';
  return (
    <div className="App">
      {/* 자동 생성 코드 */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* JSX 문법 */}
      {/* 하나로 감싸인 요소 */}
      <>
        {/* js문법 사용
          - {}로 감싸면 js표현식 사용 가능 
          - {}안에서 삼항 연산자 사용 가능 (if, for문 사용 불가X) */}
        <div>{name} 안녕?</div>
        <div>
          {student === 'sesac' ? <span>새싹인</span> : <span>새싹이 뭐지</span>}
        </div>

        {/* 3. style 속성
            - 리액트에서 dom 요소에 스타일 적용시 문자열 x -> 객체 사용
            - 스타일 이름 중 하이픈(-) 포함 시 camelCase로 작성해야 함 (ex. backgroundColor)
        */}
        <div style={styles}>스타일 적용</div>
        <div
          style={{
            backgroundColor: 'yellow',
            color: 'blue',
            fontSize: '48px',
          }}
        >
          스타일 적용2
        </div>

        {/* 4. className 사용 
            - class 속성이 아닌 className 속성 사용(ex. <div className="App">)  

            5. 종료 태그가 없는 태그 사용
            - 기존의 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야 함 or self-closing
            - <input /> or <input></input>

            6. 주석
            - // : jsx 외부 주석
            - {* *} : js 내부 주석
        */}

        {/* 실습 44 */}
        <div>
          {/* 1 */}
          이것은 div입니다.
          <h3>이것은 div 안에 있는 h3태그 입니다</h3>
          {/* 2 */}
          <h2>
            제 반려 동물의 이름은 <u>{name}</u>입니다. <br /> <u>{name}</u>은{' '}
            <u>{animal}</u>
            입니다.
          </h2>
          {/* 3 */}
          <div>
            {3 + 5 === 8 ? <span>정답입니다!</span> : <span>오답입니다!</span>}
          </div>
          {/* 4 */}
          <div>{a > b && <span>a가 b보다 큽니다</span>}</div>
          {/* 5 */}
          <div className="test">{title}</div>
          <div className="input">
            아이디: <input />
            <br /> <br />
            비밀번호: <input />
          </div>
          {/* 6 */}
          <div className="all">
            <div className="red"></div>
            <div className="orange"></div>
            <div className="yellow"></div>
            <div className="green"></div>
            <div className="blue"></div>
            <div className="navy"></div>
            <div className="purple"></div>
          </div>
        </div>

        {/* 실습 45 */}
        <div className="whole">
          <div className="body1">
            <div className="white">
              <div className="black"></div>
            </div>
          </div>
          <div className="body2"></div>
          <div className="body3"></div>
          <div className="body4"></div>
          <div className="body5"></div>
        </div>
      </>
    </div>
  );
}

export default App;

import Input from './Input';
import Result from './Result';
import Select from './Select';

import { useState } from 'react';

function App() {
  const [textColor, setColor] = useState('white');
  const [text, setText] = useState('글자글자');
  const [backgroundColor, setBackgroundColor] = useState('black');
  const [img, setImg] = useState('apple.png');

  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Select
          setImg={setImg}
          setBackgroundColor={setBackgroundColor}
          setColor={setColor}
        />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Input setText={setText} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Result
          img={img}
          text={text}
          backgroundColor={backgroundColor}
          textColor={textColor}
        />
      </div>
    </>
  );
}

export default App;

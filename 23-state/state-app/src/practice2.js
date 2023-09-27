import { useState } from 'react';

const Second = () => {
  const [number, setNumber] = useState(0);

  const Increase = () => setNumber(number + 1);
  const Decrease = () => setNumber(number - 2);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
    </div>
  );
};

export default Second;

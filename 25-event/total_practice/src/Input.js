import React from 'react';

// function Input({ setText }) {
//   return (
//     <>
//       내용 :{' '}
//       <input
//         type="text"
//         onChange={(e) => {
//           setText(e.target.value);
//         }}
//         placeholder="내용을 입력하세요."
//       />
//     </>
//   );
// }

function Input(props) {
  const setData = props.setData;

  const handleInput = (e) => {
    const content = e.target.value;
    // console.log(content); // input에 입력한 값

    setData((data) => {
      // console.log(data);
      return { ...data, content };
    });
  };

  return (
    <>
      내용 :{' '}
      <input
        type="text"
        onChange={handleInput}
        placeholder="내용을 입력하세요."
      />
    </>
  );
}

export default Input;

import React from 'react';

interface StudentInfo {
  name: string;
  grade: number;
  part?: string; // 있어도 되고 없어도 되는 props
  handleClick: (name: string, grade: number) => void;
}

// type StudentInfo = {
//   name: string;
//   grade: number;
// };

// FC: functional component
// React.FC를 사용할 때는 Generic을 이용해서 props 타입을 표현
// const Student: React.FC<StudentInfo> = ({ name, grade }) => {
//   return (
//     <div>
//       <li>이름: {name}</li>
//       <li>학년: {grade}</li>
//     </div>
//   );
// };
// React.FC를 사용할 때는 Generic을 이용해서 props 타입을 표현
const Student = ({ name, grade, part, handleClick }: StudentInfo) => {
  return (
    // 이벤트 핸들러 구현 잊지 말기
    <div onClick={() => handleClick(name, grade)}>
      <li>이름: {name}</li>
      <li>학년: {grade}</li>
      <li>전공: {part || '자유전공'}</li>
    </div>
  );
};

export default Student;

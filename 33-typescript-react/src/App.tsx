import React from 'react';
import Card from './components/Card';
import Student from './components/Student';
import Todolist from './components/Todolist';

function App() {
  const handleClick = (name: string, grade: number): void => {
    console.log(`안녕 난 ${name}이고, ${grade}학년이야!`);
  };

  return (
    <div className="App">
      <Student name="sesac" grade={3} handleClick={handleClick} />
      <br />

      <Student name="sesac" grade={3} part="CS" handleClick={handleClick} />
      <br />

      <Card title="오늘 배울 것은?">
        <h1>TypeScript with React</h1>
      </Card>
      <br />

      <Todolist />
    </div>
  );
}

export default App;

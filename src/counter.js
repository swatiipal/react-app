import { useState } from 'react';

export default function Count() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

  return (
    <div>
        <h1>Counters that update separately</h1>
      {/* <h1>Counters that update together</h1> */}
      {/* <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} /> */}
      <MyButton/>
      <MyButton/>
    </div>
  );
}

// function MyButton({ count, onClick }) {
function MyButton() {
    const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

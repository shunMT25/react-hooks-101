import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const increment2 = () => setCount(a => a + 1);

  return (
    <React.Fragment>
    <div> count: {count} </div>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    <button onClick={increment2}>+1</button>
    </React.Fragment>
  );
}

export default App;

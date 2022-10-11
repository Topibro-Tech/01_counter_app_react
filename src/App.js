import { useState } from 'react';

function App() {
  const [getCount, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(getCount + 1);
  };

  const handleDecrement = () => {
    setCount(getCount - 1);
  };
  console.log('Page refreshed');
  return (
    <div>
      {/* <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p> */}

      <h1>Count</h1>
      <button onClick={handleIncrement}>+</button>
      <br />
      <p>{getCount}</p>
      <br />
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import './App.css';
import img1 from "./assets/a19c6c3bc51986feca924c2d1c52f706.jpg";
import img2 from "./assets/cc5cd15ada1a4167884fed2920ddbc8f.jpg";

function App() {
  const arr = [img1, img2];
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((prevIndex) => (prevIndex + 1) % arr.length);
  }

  function prev() {
    setIndex((prevIndex) => (prevIndex - 1 + arr.length) % arr.length);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [arr.length]);

  return (
    <div>
      <img src={arr[index]} alt="Nature" style={{ width: '300px', height: 'auto' }} />
      <br />
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
}

export default App;

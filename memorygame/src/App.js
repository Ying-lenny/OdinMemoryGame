import React, { useState, useEffect } from "react";

const App = () => {
  const [colour, setColour] = useState('black');

  const changeColourClick = () => {
    if (colour === 'black') {
      setColour('red');
    } else {
      setColour('black')
    }
  };

  const [count, setCount] = useState(0);

  useEffect(() => {    
    document.title = `You clicked ${count} times`;  
  });

  useEffect(() => {
    console.log("Hi")
  }, [colour]);

  return (
    <div>
      <div
        id="myDiv1"
        onClick={changeColourClick}
        style={{
          color: "white",
          width: "100px",
          height: "100px",
          left: "50%",
          top: "50%",
          backgroundColor: colour,
        }}
      >
        This div can change color. Click on me!
      </div>
      <p>You clicked {count} times</p>
      <div
        id="myDiv2"
        onClick={() => setCount(count + 1)}
        style={{
          color: "white",
          width: "100px",
          height: "100px",
          left: "50%",
          top: "50%",
          backgroundColor: colour,
        }}
      >
        This div can change color. Click on me!
      </div>
    </div>
  );
};

export default App;
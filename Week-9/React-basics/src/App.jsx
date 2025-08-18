import { useState } from "react";

function App() {
  const [isEven, setIsEven] = useState(false);

  return (
    <div className="bg-amber-800 justify-between hover:bg-amber-400 hover:cursor-crosshair p-5 m-20 flex rounded-4xl text-teal-400">
      <button
        className="flex  pb-10 pr-10 "
        onClick={function () {
          setIsEven(!isEven);
        }}
      >
        Flip the Coin
      </button>
      {isEven ? (
        <p className="text-pink-500">It's Even</p>
      ) : (
        <p className="text-pink-800">It's Odd</p>
      )}
    </div>
  );
}

export default App;

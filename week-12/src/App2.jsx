import { useEffect, useState } from "react";
import axios from "axios";

const App2 = () => {
  const [trade, setTrade] = useState("");
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    async function random() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/" + counter
      );
      setTrade(response.data.title);
    }
    random();
  }, [counter]);
  return (
    <div>
      {trade}
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
      {counter}
    </div>
  );
};
export default App2;

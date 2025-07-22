import { useEffect, useState } from "react";
import { useFetch, usePostTitle } from "./hooks/useFetch";

const App = () => {
  const [currentPost, setCurrentPost] = useState(1);
  const { finalData } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return (
    <div>
      <button onClick={() => setCurrentPost(1)}>Button 1</button>
      <button onClick={() => setCurrentPost(2)}>Button 2</button>
      <button onClick={() => setCurrentPost(3)}>Button 3</button>

      {JSON.stringify(finalData)}
    </div>
  );
};

export default App;

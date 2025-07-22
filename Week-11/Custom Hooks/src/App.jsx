import { useEffect, useState } from "react";
import { usePostTitle } from "./hooks/useFetch";

const App = () => {
  const poststitle = usePostTitle();


  return(
    <div>
      {poststitle}
     </div>

  )
}

export default App;
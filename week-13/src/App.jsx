import { useEffect, useState } from "react";

function App(){
  const [count, setCount] = useState(1);
  function increaseCounter(){
    setCount(currentValue => currentValue + 1);
    //this means is ki jo currentValue hogi usmai 1 add krdo
  } 
  useEffect(() =>{
      setInterval(increaseCounter, 1000)
  },[])
  return(
    <div>
      {count}
    </div>
  )
}
export default App;
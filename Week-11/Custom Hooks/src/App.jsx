import { useState } from "react";




function useCounter(){
  const[count, setcount] = useState(0);


  function increasecount(){
setcount(count => count + 1);
  }
  return{
    Count: count,
    Increasecount: increasecount

  }
}
const App = ()=>{
  return(
    <div>
      <Counter />
            <Counter />

      <Counter />

      <Counter />

    </div>
  )
}

function Counter() {
  const {Count, Increasecount} = useCounter()
  return(
    <div>
      <button onClick={Increasecount}>Increase {Count}</button>
    </div>
  )
}

export default App;
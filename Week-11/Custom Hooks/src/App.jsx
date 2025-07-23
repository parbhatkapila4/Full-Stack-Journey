import { useRef} from "react";;

const App = () => {
  
  function useDebounce(original){
const currentClock = useRef();

const fn = () =>{
  clearTimeout(currentClock.current);
  currentClock.current = setTimeout(original, 200) 
}
return fn
  }
  
  function sendDataToBackend(){
    fetch("api.amazon.com/search/");
  }

  const debouncefn = useDebounce(sendDataToBackend)
  // means given a sendDataToBackend function pass it using a useDebounce hook which returns us a another variable i.e., debouncefn and this the function which needs to be called in input box
return(
  <>
<input type="text" onChange = {debouncefn}></input>

  </>
)
  
}

export default App;



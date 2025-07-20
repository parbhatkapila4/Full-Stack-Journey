import { useState, createContext } from "react"


const BulbComponent = createContext();

const App = () =>{
const [bulbOn, setBulbOn] = useState(true);
  return(
    <div>
      <BulbComponent value={{
        bulbOn:bulbOn,
        setBulbOn:setBulbOn
      }}>
      <Light/>
      </BulbComponent>
    </div>
  )
}
function Light({bulbOn, setBulbOn}){
  
  return(
    <div>
      <LightBulb bulbOn={bulbOn}/>
      <LightSwitch bulbOn={bulbOn} setBulbOn={setBulbOn}/>
    </div>
  )
}

  function LightBulb({bulbOn}){
    
    return(
      <div>
{bulbOn ?  "Bulb On" : "Bulb Off"}
      </div>
    )
  }

  function LightSwitch({bulbOn, setBulbOn}){

    function toggle(){
setBulbOn(!bulbOn)
    }

      
      
      
    return(
      
      <div>
        <button onClick={toggle}>Toggle Button For Bulb</button>
        
      </div>
    )
  }

  export default App;




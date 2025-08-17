import { useState } from "react";

const App = () => {
  return(
    <div>
          < Card1 />
          < Card2 />
    </div>
  )
}

const Card1 = () => {
return (
  <div className="bg-red-500 rounded-[20px]">
    Hi there 
  </div>
)
};


const Card2 = () => {
  return(
<div className="bg-red-500 rounded-[20px]">
    Hello there
  </div>
  ) 
};





export default App;
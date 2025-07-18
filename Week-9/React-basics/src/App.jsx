const App = () =>{
return(
  <div>
    <Mycomponents />
  </div>
)
}

const ColorStyle = {backgroundColor:"orange", color:"black"}

function Mycomponents(){
  return(
    <div style={ColorStyle}>
      "Hello World of React"</div>
  )
}



export default App;
import Button from "./components/button";
import Input from "./components/input";

const App = () => {
  return (
    <div className="h-screen bg-[#002b5b]">
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Input type="text" placeholder="Username" />
        <Button disabled={true}>Sign Up</Button>
      </div>
    </div>
  );
};

export default App;

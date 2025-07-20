import { createContext, useContext, useState } from "react";
const BulbComponent = createContext();

export function BulbProvider({ children }) {
  const [bulbon, setbulbon] = useState(true);
  return (
    <BulbComponent.Provider
      value={{
        bulbon: bulbon,
        setbulbon: setbulbon,
      }}
    >
      {children}
    </BulbComponent.Provider>
  );
}

const App = () => {
  return (
    <div>
      <BulbProvider>
        <Light />
      </BulbProvider>
    </div>
  );
};

function Light() {
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  );
}

function LightBulb() {
  const { bulbon } = useContext(BulbComponent);
  return <div>{bulbon ? "Bulb on" : "Bulb Is Off"}</div>;
}

function LightSwitch() {
  const { bulbon, setbulbon } = useContext(BulbComponent);

  function toggle() {
    setbulbon(!bulbon);
  }
  return (
    <div>
      <button onClick={toggle}>Toggle Button</button>
    </div>
  );
}

export default App;

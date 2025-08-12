import { useState } from "react";

function App() {
  return (
    <div className="bg-gray-500 h-screen">
      <ToggleMessage />
      <Greetings name={"Ramesh"} />
      <div className="flex justify-center">
        <div>
          <div className="bg-white mt-7 rounded-2xl p-10 w-[300px]">
            <PostComponent
              name={"Parbhat"}
              subtitle={"20 Followers"}
              time={"2m ago"}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s"
              }
              description={
                "Want to know how to win Big? Check out how these folks won $6000 in Bounties"
              }
            />
          </div>
          <br></br>
          <div className="bg-white mt-7 rounded-2xl p-10 w-[300px]">
            <PostComponent
              name={"Parbhat"}
              subtitle={"promoted"}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s"
              }
              description={
                "Want to know how to win Big? Check out how these folks won $6000 in Bounties"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ToggleMessage() {
  const [isVariable, setIsVariable] = useState(true);
  return (
    <div>
      <button
        className="bg-black text-white p-5 hover:bg-amber-800 cursor-pointer rounded-2xl m-10"
        onClick={() => setIsVariable(!isVariable)}
      >
        Toggle Button
      </button>
      {isVariable && <p>This message is conditionally rendering!</p>}
    </div>
  );
}

function PostComponent({ name, subtitle, time, image, description }) {
  return (
    <div>
      <div className="flex">
        <img src={image} className="w-[30px] h-[30px] rounded-[30px]" />
        <div className="text-[10px] ml-10">
          <b>{name}</b>
          <div>{subtitle}</div>
          {time !== undefined ? (
            <div className="flex">
              <div>{time}</div>
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s"
                }
                className="w-[12px] h-[12px] ml-2"
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="text-[12px]">{description}</div>
    </div>
  );
}

const Greetings = ({ name }) => {
  return <h1>Hello, {name}</h1>;
};

export default App;

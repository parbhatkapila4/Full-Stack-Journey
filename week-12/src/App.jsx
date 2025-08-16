import { useState } from "react";

function App() {
  return (
    <div className="bg-gray-500 border-4 border-white h-screen">
      <ToggleMessage />
    </div>
  );
}

function ToggleMessage() {
  let [notificatonCount, setnotificatonCount] = useState(0);

  console.log("re-render");
  function toggle() {
    setnotificatonCount(notificatonCount + 1);
  }
  return (
    <div>
      <button onClick={toggle}>Toggle message</button>
      {notificatonCount}
    </div>
  );
}

// function PostComponent({ name, subtitle, time, image, description }) {
//   return (
//     <div>
//       <div className="flex">
//         <img src={image} className="w-[30px] h-[30px] rounded-[30px]" />
//         <div className="text-[10px] ml-10">
//           <b>{name}</b>
//           <div>{subtitle}</div>
//           {time !== undefined ? (
//             <div className="flex">
//               <div>{time}</div>
//               <img
//                 src={
//                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s"
//                 }
//                 className="w-[12px] h-[12px] ml-2"
//               />
//             </div>
//           ) : null}
//         </div>
//       </div>
//       <div className="text-[12px]">{description}</div>
//     </div>
//   );
// }

// const Greetings = ({ name }) => {
//   return <h1>Hello, {name}</h1>;
// };

//  <Greetings name={"Ramesh"} />
//       <div className="flex justify-center">
//         <div>
//           <div className="bg-white mt-7 rounded-2xl p-10 w-[300px]">
//             <PostComponent
//               name={"Parbhat"}
//               subtitle={"20 Followers"}
//               time={"2m ago"}
//               image={
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s"
//               }
//               description={
//                 "Want to know how to win Big? Check out how these folks won $6000 in Bounties"
//               }
//             />
//           </div>
//           <br></br>
//           <div className="bg-white mt-7 rounded-2xl p-10 w-[300px]">
//             <PostComponent
//               name={"Parbhat"}
//               subtitle={"promoted"}
//               image={
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s"
//               }
//               description={
//                 "Want to know how to win Big? Check out how these folks won $6000 in Bounties"
//               }
//             />
//           </div>
//         </div>
//       </div>

export default App;

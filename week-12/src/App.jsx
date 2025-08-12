function App() {
  return (
    <div className="bg-gray-500 h-screen">
      <div className="flex justify-center">
        <div>
          <div>
            <PostComponent
              name={"Parbhat"}
              followerCount={20}
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
          <div>
            <PostComponent
              name={"Parbhat"}
              followerCount={20}
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

          <div>
            <PostComponent
              name={"Parbhat"}
              followerCount={20}
              time={"2m ago"}
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

function PostComponent({ name, followerCount, time, image, description }) {
  return (
    <div>
      <div className="flex">
        <img src={image} className="w-[30px] h-[30px] rounded-[30px]" />
        <div className="text-[10px] ml-10">
          <b>{name}</b>
          <div>{followerCount} Followers</div>
          <div>{time}</div>
        </div>
      </div>
      <div className="text-[12px]">{description}</div>
    </div>
  );
}

export default App;

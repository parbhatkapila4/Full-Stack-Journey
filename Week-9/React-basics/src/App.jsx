function App() {
  return (
    <div style={{backgroundColor: "#E1F4CB", height: "100vh", display: "flex", justifyContent:"center"}}>
      <PostComponent />
    </div>
  );
}

function PostComponent() {
  return (
    <div  style={{
          width: 200,
          backgroundColor: "whitesmoke",
          borderColor: "Black",
          borderRadius: 10,
          borderWidth: 10
        }}>
      <div
        style={{
          display: "flex",
        }}
      >
        <img
          src={
            "https://pbs.twimg.com/profile_images/1877792727179427840/MO8i87n8_400x400.jpg"
          }
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
          }}
        ></img>

        <div style={{fontSize: 10, marginLeft: 20  }}>
          <b>100Xdevs</b>
        
        <div>24,000 Followers</div>
        <div>12mo</div>
        </div>
      </div>
      <br></br>
      <div style={{fontSize:20}}>
        Want to know how to win big? Check out these Folks win $6000 Bounties..
      </div>
    </div>
    
  );
}

export default App;

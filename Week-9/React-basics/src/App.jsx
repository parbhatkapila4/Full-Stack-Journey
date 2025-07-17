import { useState } from "react";

function App() {

  return (
    <div style={{ backgroundColor: "#04151F", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PostComponent />
      </div>
      <div>
        <ProfileComponent />
      </div>
      <div>
        <ToggleMessage />
      </div>
    </div>
  );
}


function PostComponent() {
  return (
    <div
      style={{
        width: 200,
        backgroundColor: "whitesmoke",
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 1,
        padding: 20,
      }}
    >
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

        <div style={{ fontSize: 10, marginLeft: 20 }}>
          <b>100Xdevs</b>

          <div>24,000 Followers</div>
          <div>12mo</div>
        </div>
      </div>
      <br></br>
      <div style={{ fontSize: 15 }}>
        Want to know how to win big? Check out these Folks win $6000 Bounties..
      </div>
    </div>
  );
}

const ToggleMessage = () => {
  const [isVariable, setIsVisible] = useState(false);

  return(
    <div>
      <button onClick={() => setIsVisible(!isVariable)}>
        Toggle Foggle Button
      </button>
      {!isVariable && <p style={{color:"white"}}>This is what Re rendering is</p>}
    </div>
  )
}







function ProfileComponent() {
  return (
    <div
      style={{
        width: 200,
        backgroundColor: "#432e38ff",
        borderColor: "black",
        borderRadius: 20,
        borderWidth: 150,
        padding: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={
            "https://pbs.https://pbs.twimg.com/profile_images/1944724534176997376/f7lhbMrD_400x400.jpg.//https://s3.us-west-1.amazonaws.com/idtech-2018-media-prd/1513305190_idtc_roblox_lua_g3_header_427769e050.jpeg/MO8i87n8_400x400.jpg"
          }
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
          }}
        ></img>
      </div>
      <br></br>
      <div style={{ fontSize: 10, color: "white" }}>
        <div style={{ marginLeft: 70 }}>Parbhat Kapila</div>
        <br></br>
        <div style={{ marginLeft: 35 }}>Software Developer at Space X</div>
      </div>
      <hr></hr>
      <div
        style={{
          fontSize: 10,
          color: "white",
          display: "flex",
          alignContent: "center",
          marginLeft: 20,
        }}
      >
        Profile Impression : 1313
      </div>
      <br></br>
      <div style={{ fontSize: 10, marginLeft: 20, color: "white" }}>
        Profile Viewer : 41000
      </div>
    </div>
  );
}

export default App;











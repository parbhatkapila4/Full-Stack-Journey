import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet} from "react-router-dom";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Toppage />}>
          <Route
            path="/neet/online-coaching-class-11"
            element={<Class11Program />}
          />
          <Route
            path="/neet/online-coaching-class-12"
            element={<Class12Program />}
          />
          <Route path="/Basics" element={<LandingComponent />} />
          <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

  function Toppage() {
    return (
      <div style={{height: "100vh", background: "green"}}>
      <Headers />
      <div style={{height: "90vh", background: "orange"}}>
        <Outlet />
      </div>
      Footers
      </div>
    );
  }

  function Headers(){
    return(
      <div >
 <Link to="/neet/online-coaching-class-11">Class 11th</Link>
        <br></br>
        <Link to="/neet/online-coaching-class-12">Class 12th</Link>
        <br></br>
        <Link to="/">Allen</Link>
      </div>
    )
  }

  function LandingComponent() {
    return (
      <div
        style={{
          backgroundColor: "yellow",
          color: "black",
          padding: 20,
          margin: 20,
          borderRadius: 30,
        }}
      >
        Hey There Thanks for Showing up at Allen's landing page!
      </div>
    );
  }

  function Class11Program() {
    const navigate = useNavigate();
    function RedirectUser() {
      navigate("/");
    }
    return (
      <div
        style={{
          backgroundColor: "pink",
          color: "black",
          padding: 20,
          margin: 20,
          borderRadius: 20,
        }}
      >
        NEET PROGRAMS FOR 11th CLASS!
        <button onClick={RedirectUser}>GO Back!</button>
      </div>
    );
  }

  function Class12Program() {
    return (
      <div
        style={{
          backgroundColor: "orange",
          color: "black",
          padding: 20,
          margin: 20,
          borderRadius: 20,
        }}
      >
        NEET PROGRAMS FOR 12th CLASS!
      </div>
    );
  }
}

function ErrorPage() {
  return (
    <div style={{ background: "red" }}>
      Sorry Page dont't found Kindly Redirect
    </div>
  );
}

export default App;

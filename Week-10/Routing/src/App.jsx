import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/neet/online-coaching-class-11">Class 11th</Link><br></br>
        <Link to="/neet/online-coaching-class-12">Class 12th</Link><br></br>
        <Link to="/">Allen</Link>
        <Routes>
          <Route
            path="/neet/online-coaching-class-11"
            element={<Class11Program />}
          />
          <Route
            path="/neet/online-coaching-class-12"
            element={<Class12Program />}
          />
          <Route path="/" element={<LandingComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

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

export default App;

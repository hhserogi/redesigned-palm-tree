import "./App.css";
import Main from "./components/Main";
import NavMenu from "./components/NavMenu";
import PoolsGrid from "./components/PoolsGrid";
import "./index.css";

function App() {
  return (
    <div>
      <div className="background_main">
        <section className="wrapper">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </section>
      </div>
      <div className="content_main">
        <NavMenu />
        <Main />
        <PoolsGrid />
      </div>
    </div>
  );
}

export default App;

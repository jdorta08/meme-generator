import "./Styles/global.scss";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Meme />
      </section>
    </div>
  );
}

export default App;

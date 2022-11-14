import "./App.css";
import {Book} from "./Components/Book"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="titulo"> BookHub </h1>
      </header>
      <div className="library">
        <div className="bookShelf">
          <div className="bookShelf-inner">
            <div className="bookShelf-front">
              <h2>HISTORIA ANTIGUA I</h2>
            </div>
            <div className="bookShelf-back">
              <Book Content='Decadencia y Caida del Imperio Romano I (E. Gibbon)'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

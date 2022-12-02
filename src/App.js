import "./App.css";
import { Library } from "./Components/Library";
import { Bookshelf } from "./Components/Bookshelf";
// import {BookshelfInner} from "./Components/Bookshelf";
// import {BookshelfFront} from "./Components/Bookshelf";
// import {BookshelfBack} from "./Components/Bookshelf"
import { Book } from "./Components/Book";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="titulo"> [ BookHub ] </h1>
        </header>
        <Library>
          <Bookshelf shelfName="Historia Antigua I">
            <Book Content="Decadencia y Caida del Imperio Romano I (E. Gibbon)" />
            <Book Content="Decadencia y Caida del Imperio Romano II (E. Gibbon)" />
            <Book Content="Decadencia y Caida del Imperio Romano III (E. Gibbon)" />
          </Bookshelf>
        </Library>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import { Library } from "./Components/Library";
import { Bookshelf } from "./Components/Bookshelf";
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
          <Bookshelf shelfName="Orientalismo">
            <Book
              href="https://budismolibre.org/docs/libros_budistas/Heinrich_Zimmer_Filosofia_de_la_India.pdf"
              Content="Filosofías de la India (H. Zimmer)"
            />
          </Bookshelf>
        </Library>
      </div>
    </>
  );
}

export default App;

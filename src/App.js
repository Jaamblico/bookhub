import "./App.css";
import { Library } from "./Components/Library";
import { Bookshelf } from "./Components/Bookshelf";
import { Book } from "./Components/Book";

function App() {
  const shelfs = [
    {
      name: "Historia Antigua I",
      books: [{title: "Libro 1", link: "linkAlLibro"}, {title: "Libro 1", link: "linkAlLibro"}, {title: "Libro 1", link: "linkAlLibro"}]
    },
    {
      name: "Historia Antigua II",
      books: [{title: "Libro 1", link: "linkAlLibro"}, {title: "Libro 1", link: "linkAlLibro"}, {title: "Libro 1", link: "linkAlLibro"}]
    }
  ]

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="titulo"> [ BookHub ] </h1>
        </header>
        <Library>
          {shelfs.map(({name, books}) => {
            <BookShelf name={shelf.name}>
              {
                books.map(({title, link}) => {
                  <Book title={book.title} link={book.link} />
                })
              }
              </BookShelf>
          }
          )}
        </Library>

          {/* <Bookshelf name="Historia Antigua I">
            <Book title="Decadencia y Caida del Imperio Romano I (E. Gibbon)" link="" />
            <Book Content="Decadencia y Caida del Imperio Romano II (E. Gibbon)" />
            <Book Content="Decadencia y Caida del Imperio Romano III (E. Gibbon)" />
          </Bookshelf>
          <Bookshelf shelfName="Orientalismo">
            <Book
              href="https://budismolibre.org/docs/libros_budistas/Heinrich_Zimmer_Filosofia_de_la_India.pdf"
              Content="Filosofías de la India (H. Zimmer)"
            />
          </Bookshelf> */}
      </div>
    </>
  );
}

export default App;

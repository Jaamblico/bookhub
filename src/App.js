import "./App.css";

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
              <div className="book">
                Decadencia y Caida del Imperio Romano I (E. Gibbon)
              </div>
              <div className="book">
                Decadencia y Caida del Imperio Romano II (E. Gibbon)
              </div>
            </div>
          </div>
        </div>
        <div className="bookShelf">
          <div className="book">Libro de Arena (J.L. Borges)</div>
        </div>
        <div className="bookShelf">
          <div className="book">Libro de Arena (J.L. Borges)</div>
        </div>
        <div className="bookShelf">
          <div className="book">
            Decadencia y Caida del Imperio Romano I (E. Gibbon)
          </div>
          <div className="book">
            Decadencia y Caida del Imperio Romano II (E. Gibbon)
          </div>
          <div className="book">
            Decadencia y Caida del Imperio Romano III (E. Gibbon)
          </div>
        </div>
        <div className="bookShelf">
          <div className="book">
            Decadencia y Caida del Imperio Romano IV (E. Gibbon)
          </div>
        </div>
        <div className="bookShelf">
          <div className="book">
            Decadencia y Caida del Imperio Romano I (E. Gibbon)
          </div>
          <div className="book">
            Decadencia y Caida del Imperio Romano II (E. Gibbon)
          </div>
          <div className="book">
            Decadencia y Caida del Imperio Romano III (E. Gibbon)
          </div>
          <div className="book">
            Decadencia y Caida del Imperio Romano III (E. Gibbon)
          </div>
          <div className="book">
            Decadencia y Caida del Imperio Romano IV (E. Gibbon)
          </div>
          <div className="book">
            Decadencia y Caida del Imperio Romano IV (E. Gibbon)
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

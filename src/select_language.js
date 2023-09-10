import React from 'react';
import './select_language.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>ごみ箱まっぷ♡</h1>
      </header>

      <div className="language-select">
        <a className="block button" href="#">English</a>
        <a className="block button" href="./App">日本語</a>
        <a className="block button" href="#">中文</a>
      </div>

      <footer className="footer">
        <h6>Team 梅ねり</h6>
      </footer>
    </div>
  );
}

export default App;

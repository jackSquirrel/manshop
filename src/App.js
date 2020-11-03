import React from 'react';
import Header from './Components/Header';
import TopLine from './Components/TopLine';
import Title from './Components/Title';
import NewSeason from './Components/NewSeason';
import NewCollection from './Components/NewCollection';
import LastCollection from './Components/LastCollection';
import NewGoods from './Components/NewGoods';

function App() {
  return (
    <div className="App">
      <TopLine />
      <Header />
      <main className="content">
        <Title />
        <div className="section__horisontal">
          <NewSeason />
          <NewCollection />
        </div>
        <LastCollection />
        <NewGoods />
      {
        //<Brands />
      }
      </main>
      {
        //<Footer />
      }
    </div>
  );
}

export default App;

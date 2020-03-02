import React from 'react';
import SongDisplay from './SongDisplay';
import SongList from './SongList';
import Header from './Header';

const container = {
  paddingTop: '70px',
  paddingRight: '55px',
  paddingLeft: '55px',
  marginRight: 'auto',
  marginLeft: 'auto'
}

function App() {
  return (
    <div>
      <div style={container}>
        <Header />
        <br />
        <SongList />
        <hr />
        <SongDisplay />
      </div>
    </div>
  );
}

export default App;

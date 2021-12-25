import React, {Component} from 'react';
import Album from './Album';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Album albumName="Iron Maiden" albumYear={1980} albumCover={"https://upload.wikimedia.org/wikipedia/en/7/7c/Iron_Maiden_%28album%29_cover.jpg"}/>
      </div>
    );
  }
}

export default App;

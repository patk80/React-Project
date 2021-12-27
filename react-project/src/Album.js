import React, {Component} from 'react';
import './Album.css';

class Album extends Component {
    render() {
        return(
            <div className="Album">
                <img src={this.props.albumCover} alt={this.props.albumName}/>
                <h2 className="Album-title">{this.props.albumName}</h2>
                <p className="Album-data">{this.props.albumYear}</p>
            </div>
        );
    }
}

export default Album;
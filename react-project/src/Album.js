import React, {Component} from 'react';

class Album extends Component {
    render() {
        return(
            <div className="Album">
                <img src={this.props.albumCover} alt={this.props.albumName}/>
                <h2>{this.props.albumName}</h2>
                <p>{this.props.albumYear}</p>
            </div>
        );
    }
}

export default Album;
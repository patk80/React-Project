import React, { Component } from 'react';
import Album from './Album';
import './Discography.css';

class Discography extends Component{
    static defaultProps = {
        record : [
            {albumName: "Iron Maiden", albumYear: 1980, albumCover: "https://upload.wikimedia.org/wikipedia/en/7/7c/Iron_Maiden_%28album%29_cover.jpg"},
            {albumName: "Killers", albumYear: 1981, albumCover: "https://upload.wikimedia.org/wikipedia/en/b/b4/Iron_Maiden_Killers.jpg"}
        ]
    };
    render(){
        return (
            <div className="Discography">
                <h1>Discography!!!!!!</h1>
                <div className="Discography-cards">
                    {this.props.record.map((r) => (
                        <Album albumName={r.albumName} albumYear={r.albumYear} albumCover={r.albumCover} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Discography;
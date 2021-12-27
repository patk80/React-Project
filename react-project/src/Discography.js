import React, { Component } from 'react';
import Album from './Album';
import './Discography.css';

class Discography extends Component{
    static defaultProps = {
        record : [
            {albumName: "Iron Maiden", albumYear: 1980, albumCover: "https://upload.wikimedia.org/wikipedia/en/7/7c/Iron_Maiden_%28album%29_cover.jpg"},
            {albumName: "Killers", albumYear: 1981, albumCover: "https://upload.wikimedia.org/wikipedia/en/b/b4/Iron_Maiden_Killers.jpg"},
            {albumName: "Number of the Beast", albumYear: 1982, albumCover: "https://img.discogs.com/YW7nVVIdLqA7-iXsJfWe4hYiMjA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4225106-1576052157-3898.jpeg.jpg"},
            {albumName: "Piece of Mind", albumYear: 1983, albumCover: "https://upload.wikimedia.org/wikipedia/en/8/85/Iron_Maiden_-_Piece_Of_Mind.jpg"},
            {albumName: "Powerslave", albumYear: 1984, albumCover: "https://upload.wikimedia.org/wikipedia/en/1/1c/Iron_Maiden_-_Powerslave.jpg"},
            {albumName: "Caught Somewhere in Time", albumYear: 1986, albumCover: "https://upload.wikimedia.org/wikipedia/en/9/9b/Iron_Maiden_-_Somewhere_in_Time.jpg"},
            {albumName: "Seventh Son of a Seventh Son", albumYear: 1988, albumCover: "https://upload.wikimedia.org/wikipedia/en/c/c0/Iron_Maiden_-_Seventh_Son_Of_A_Seventh_Son.jpg"},
            {albumName: "No Prayer For the Dying", albumYear: 1990, albumCover: "https://upload.wikimedia.org/wikipedia/en/5/5c/IronMaidenNoPrayerForTheDying.jpg"},
            {albumName: "Fear of the Dark", albumYear: 1992, albumCover: "https://upload.wikimedia.org/wikipedia/en/e/eb/Iron_Maiden_-_Fear_Of_The_Dark.jpg"},
            {albumName: "The X Factor", albumYear: 1995, albumCover: "https://upload.wikimedia.org/wikipedia/en/2/21/Iron_Maiden_-_The_X_Factor.jpg"},
            {albumName: "Virtual XI", albumYear: 1998, albumCover: "https://upload.wikimedia.org/wikipedia/en/3/3a/Iron_Maiden_-_Virtual_XI.jpg"},
            {albumName: "Brave New World", albumYear: 2000, albumCover: "https://img.discogs.com/Mi9OTZcGpuX3FGoUpCFdwlkqTQM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12056902-1626649316-8698.jpeg.jpg"},
            {albumName: "Dance of Death", albumYear: 2003, albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Iron_Maiden-Dance_of_Death.jpg/220px-Iron_Maiden-Dance_of_Death.jpg"},
            {albumName: "A Matter of Life and Death", albumYear: 2006, albumCover: "https://upload.wikimedia.org/wikipedia/en/7/77/Iron_Maiden_-_A_Matter_Of_Life_And_Death.jpg"},
            {albumName: "The Final Frontier", albumYear: 2010, albumCover: "https://upload.wikimedia.org/wikipedia/en/8/86/The_Final_Frontier_cover.jpg"},
            {albumName: "The Book of Souls", albumYear: 2015, albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Iron_Maiden_-_The_Book_of_Souls.png/220px-Iron_Maiden_-_The_Book_of_Souls.png"},
            {albumName: "Senjutsu", albumYear: 2021, albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Iron_Maiden_-_Senjutsu.jpg/220px-Iron_Maiden_-_Senjutsu.jpg"}
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
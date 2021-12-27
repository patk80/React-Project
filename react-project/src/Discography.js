import React, { Component } from 'react';
import Album from './Album';
import './Discography.css';

class Discography extends Component{
    static defaultProps = {
        record : [
            {albumName: "Iron Maiden", albumYear: 1980, albumCover: "https://m.media-amazon.com/images/I/81J4jpxoScL._SL1500_.jpg"},
            {albumName: "Killers", albumYear: 1981, albumCover: "https://m.media-amazon.com/images/I/81foTapQNbL._AC_SL1500_.jpg"},
            {albumName: "The Number of the Beast", albumYear: 1982, albumCover: "https://townsquare.media/site/846/files/2017/03/Number-of-the-beast-album-cover.jpg"},
            {albumName: "Piece of Mind", albumYear: 1983, albumCover: "https://m.media-amazon.com/images/I/819CkMmorLL._SL1500_.jpg"},
            {albumName: "Powerslave", albumYear: 1984, albumCover: "https://m.media-amazon.com/images/I/81qKQEXFRSL._AC_SL1500_.jpg"},
            {albumName: "Caught Somewhere in Time", albumYear: 1986, albumCover: "https://lastfm.freetls.fastly.net/i/u/ar0/44711959e4d890ff1d99045d5ff3dff1.jpg"},
            {albumName: "Seventh Son of a Seventh Son", albumYear: 1988, albumCover: "https://m.media-amazon.com/images/I/81MnhzRHYwL._AC_SL1500_.jpg"},
            {albumName: "No Prayer For the Dying", albumYear: 1990, albumCover: "https://m.media-amazon.com/images/I/81yi+KqZ9SL._AC_SL1500_.jpg"},
            {albumName: "Fear of the Dark", albumYear: 1992, albumCover: "https://m.media-amazon.com/images/I/81xEMRQkfpL._SL1500_.jpg"},
            {albumName: "The X Factor", albumYear: 1995, albumCover: "https://lh3.googleusercontent.com/proxy/864qPt8H9ZK_ccYQoKohTiROjWPOxuyxHXM2x4CP0f1lbGlJ-QfUaFVZd6PMsbNKTOAlqs1qZpNTh_njELo5AekQNRiS5uVYoC3kFop-rBYuwcy-6Ac9WBj7g3Tg2Q_IeIAUgcqTO6bq1_jJWxXbsWFI-rmGvsc"},
            {albumName: "Virtual XI", albumYear: 1998, albumCover: "https://m.media-amazon.com/images/I/81VxO9sHLfL._SL1300_.jpg"},
            {albumName: "Brave New World", albumYear: 2000, albumCover: "https://d24jnm9llkb1ub.cloudfront.net/icpn/4050538293180/4050538293180-cover-zoom.jpg"},
            {albumName: "Dance of Death", albumYear: 2003, albumCover: "https://lh3.googleusercontent.com/proxy/0JNnQQ3Le-sctJcJSciqkJKO6eD8Fo-0F56DadOMdXDeimudTA3c4nhl6TYj76bLyAUjcojcdfxxoY0OoRrIVjP2VkLVTnkz4thVmk4dzrx_hD236A8-BSs8bmzAMEDPYeiw-0AkDdMeGkutfCbA17F6XRJPmA"},
            {albumName: "A Matter of Life and Death", albumYear: 2006, albumCover: "https://lh3.googleusercontent.com/proxy/zOfAQ54Wxm0I6yR-ukpSVgnAqMqFmimkpVRpesmNI1lFSKXi4jPkE9R_7bYG5vk1_v8F9ZGcjvHY5-KGX9RV2eqrXeXPbt-Nu7WQyXcR_V201EeXuHjEN2MmQJapGGgSbD0X426L5zx4Q0bMgNMCRBwA-TpUF6w"},
            {albumName: "The Final Frontier", albumYear: 2010, albumCover: "https://townsquare.media/site/295/files/2020/08/FinalFrontier.jpg?w=980&q=75"},
            {albumName: "The Book of Souls", albumYear: 2015, albumCover: "https://lh3.googleusercontent.com/proxy/-3StnA6NAKH3wVtlAUktC2-Z0BQi6-2S_3iULhLXRROHFJ7rNvyqqSTp3xL93ZlSBNzRX68dxeAXgw_DyOI-lq211-rNmd2CEh6VwdFwfBsL5mtuOWepEeJ65xPyDbpWv1MgdMBlU43rrUpwtAGH_VAc8yMr1cM"},
            {albumName: "Senjutsu", albumYear: 2021, albumCover: "https://www.ironmaiden.com/media/images/teddy.jpg"}
        ]
    };
    render(){
        return (
            <div className="Discography">
                <h1 className="Discography-title">Iron Maiden Discography</h1>
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
import React from "react";
import './links.css'

function Links() {
    return (
        <div className="holder">
            <h1>Useful links</h1>
            <h2 className="pLinks">Shogi news</h2>
            <ul>
                <li>
                    <a href="http://shogihub.com/">ShogiHub</a> : News about the professional shogi world in English.
                </li>
                <li>
                    <a href="https://fesashogi.eu/">FESA</a> : Official website of the Federation of European Shogi Associations.
                </li>
                <li>
                    <a href="http://shogi.pl/">Shogi Harbour</a> : An English-language website dedicated to Shogi promotion, including some tutorials.
                </li>
            </ul>
            <h2 className="pLinks">YouTube channels</h2>
            <ul>
                <li>
                    <a href="https://www.youtube.com/user/HIDETCHI">HIDETCHI</a> : A lot of great videos in English.
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCRnXG7CkKfEN6IINKcO_uBg">Shogi Harbour</a> : A newer and active English shogi channel with tutorials and game commentaries.
                </li>
            </ul>
        </div>
    );
}

export default Links;
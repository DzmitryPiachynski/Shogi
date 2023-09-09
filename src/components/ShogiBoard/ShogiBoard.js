import React from 'react';
import "./shogiboard.css"

function ShogiBoard() {
    const boardData = [
        ["香", "桂", "銀", "金", "玉", "金", "銀", "桂", "香"],
        ["", "飛", "", "", "", "", "", "角", ""],
        ["歩", "歩", "歩", "歩", "歩", "歩", "歩", "歩", "歩"],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["歩", "歩", "歩", "歩", "歩", "歩", "歩", "歩", "歩"],
        ["", "角", "", "", "", "", "", "飛", ""],
        ["香", "桂", "銀", "金", "玉", "金", "銀", "桂", "香"],
    ];

    const pieceStyles = {
        "歩": { color: "black" },
        "香": { },
        "桂": { },
        "銀": { },
        "金": { },
        "玉": { },
        "飛": { },
        "角": { },
    };

    const squares = [];
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const piece = boardData[row][col];
            const pieceStyle = pieceStyles[piece] || {};

            squares.push(
                <div
                    key={`${row}-${col}`}
                    className="square"
                    style={pieceStyle}
                >
                    {piece}
                </div>
            );
        }
    }

    return (
        <div className="shogi-container">
            <div className="shogi-background">
                <div className="shogi-board">
                    {squares}
                </div>
            </div>
        </div>
    );
}

export default ShogiBoard;
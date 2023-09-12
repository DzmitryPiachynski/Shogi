import React from 'react';
import "./freeboard.css"
import ShogiBoard from "../../components/ShogiBoard/ShogiBoard";
import Switch from "../../components/Switch/Switch";

function FreeBoard() {
    return (
        <div className="fb-container">
            <div className="p-enemy"></div>
            <div className="board">
                <ShogiBoard />
            </div>
            <div className="btns-p">
                <div className="buttons">
                    <Switch />
                    <button>Clear</button>
                </div>
                <div className="pieces"></div>
            </div>
        </div>
    );
}

export default FreeBoard;
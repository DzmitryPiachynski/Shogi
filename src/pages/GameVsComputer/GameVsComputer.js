import React from 'react';
import "./style.css"
import ShogiBoard from "../../components/ShogiBoard/ShogiBoard";

function GameVsComputer() {
    return (
        <div className="gvc-container">
            <div className="p-enemy"></div>
            <div className="board">
                <ShogiBoard />
            </div>
            <div className="btns-p">
                <div className="buttons">
                    <button>Step back</button>
                    <button>New game</button>
                </div>
                <div className="pieces"></div>
            </div>
        </div>
    );
}

export default GameVsComputer;
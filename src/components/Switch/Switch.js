import React, { useState } from 'react';
import './switch.css'; // Импортируйте стили

function SwitchButton() {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn((prevIsOn) => !prevIsOn);
    };

    const switchClass = isOn ? 'switch-on' : 'switch-off';

    return (
        <div className="switch-container" onClick={toggleSwitch}>
            <p className={`p-play-${switchClass}`}>Play</p>
            <button className={`switch-button ${switchClass}`} >
            </button>
            <p className={`p-edit-${switchClass}`}>Edit</p>
        </div>
    );
}

export default SwitchButton;
import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
    const [showColorList, setShowColorList] = useState(false);
    const [selectedColor, setSelectedColor] = useState(null);

    const toggleColorList = () => {
        setShowColorList(!showColorList);
    };

    const handleColorClick = (color) => {
        setSelectedColor(color);
        setShowColorList(false);
    };

    return (
        <div className="container">
            <div className="color-picker">
                <button onClick={toggleColorList}>Pick a color</button>
                {showColorList && (
                    <div className="color-list">
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                className="color"
                                style={{ backgroundColor: color }}
                                onClick={() => handleColorClick(color)}
                            ></div>
                        ))}
                    </div>
                )}
                {selectedColor && (
                    <div className="selected-color">
                        You picked: <div className="color" style={{ backgroundColor: selectedColor }}></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ColorPicker;
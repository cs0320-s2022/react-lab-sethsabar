import React from 'react';
//@ts-ignore
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './App.css';

interface textBoxProp {
    label: string
    onChange: (sign: string) => void
}

function TextBox(prop: textBoxProp) {
    const starOptions: string[] = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio",
        "Sagittarius", "Capricorn", "Aquarius", "Pisces"]


    return (
        <div className="TextBox">
            <Dropdown className={prop.label} options={starOptions} placeholder={prop.label}
                      onChange={event => prop.onChange(event.value)}>
                {prop.label}
            </Dropdown>
        </div>
    );
}

export default TextBox;
import React, {useState} from 'react';
import './App.css';
//@ts-ignore
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import TextBox from "./TextBox";
import axios from "axios";

function Horoscope() {

    const [mySun, setMySun] = useState("");
    const [myMoon, setMyMoon] = useState("");
    const [myRising, setMyRising] = useState("");
    const [myHoroscope, setMyHoroscope] = useState([]);


    const requestHoroscope = () => {
        const toSend = {
            sun: mySun,
            moon: myMoon,
            rising: myRising
        };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        axios.post("http://localhost:4567/horoscope", toSend, config)
            .then((response) => {
                console.log(response.data);
                setMyHoroscope(response.data["horoscope"]);
            })
            .catch((error) => {
                console.log(error);
            });
    }

                return (
        <div className="Horoscope">
            <header className="Horoscope-header">
                Hi! Enter your star signs to get a horoscope:
                <TextBox label="Sun" onChange={setMySun}/>
                <TextBox label="Moon" onChange={setMyMoon}/>
                <TextBox label="Rising" onChange={setMyRising}/>
            </header>
            <AwesomeButton type="primary" size="large"
                           onPress={requestHoroscope}>
                Submit
            </AwesomeButton>
            {myHoroscope.map((item) => (
                <p> {item} </p>
            ))}
        </div>
    );
}

export default Horoscope;
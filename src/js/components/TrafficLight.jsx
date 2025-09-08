import React, { useState, useEffect } from "react";

const TrafficLight = () => {
    const [selected, setSelected] = useState("red");
    const [active, setActive] = useState(false);


    const changeColor = (color) => {
        if (!active) {
            setSelected(color);
        }
    };


    const toggleMode = () => {
        setActive(!active);
    };


    useEffect(() => {
        if (active) {
            const interval = setInterval(() => {
                if (selected === "red") {
                    setSelected("yellow");
                } else if (selected === "yellow") {
                    setSelected("green");
                } else if (selected === "green") {
                    setSelected("red");
                }
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [active, selected]);

    return (
        <main>
            <div className="p-box"></div>
            <div className="box-light">
                <div
                    className={`red ${selected === "red" ? "light-on" : ""}`}
                    onClick={() => changeColor("red")}
                ></div>
                <div
                    className={`yellow ${selected === "yellow" ? "light-on" : ""}`}
                    onClick={() => changeColor("yellow")}
                ></div>
                <div
                    className={`green ${selected === "green" ? "light-on" : ""}`}
                    onClick={() => changeColor("green")}
                ></div>
            </div>
            <button className="btn btn-dark mt-4" onClick={toggleMode}>
                {active ? "Manual" : "Iniciar Modo Automático"}
            </button>
        </main>
    );
};

export default TrafficLight;
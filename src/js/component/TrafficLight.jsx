import React, {useState} from 'react';

const TrafficLight = () => {
    const [color, setColor] = useState("green");
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
    <div  style={{ width: "25px", height: "100px" }}></div>
    <div className="bg-dark rounded-5 d-flex justify-content-evenly flex-column align-items-center" style={{ width: "300px", height: "600px" }}>
        <div
            onClick={() => {
                setColor("red");
            }}
            className={"bg-danger rounded-circle " + (color === "red" ? "onLightRed" : "")}
            style={{ width: "125px", height: "125px" }}
        ></div>
        <div
            onClick={() => {
                setColor("yellow");
            }}
            className={"bg-warning rounded-circle " + (color === "yellow" ? "onLightYellow" : "")}
            style={{ width: "125px", height: "125px" }}
        ></div>
        <div
            onClick={() => {
                setColor("green");
            }}
            className={"bg-success rounded-circle " + (color === "green" ? "onLightGreen" : "")}
            style={{ width: "125px", height: "125px" }}
        ></div>
    </div>
</div>

    )
}

export default TrafficLight;
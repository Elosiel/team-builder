import React from "react";
import ReactDom from "React-Dom";

import ".styles.css";

function app() {
    return (
        <div className="app">
            <form method="post">
                <label htmlFor="fnameInput">First Name</label>
                <Input
                maxLength="15"
                placeHolder="First Name"
                Id="fnameImput"
                name="fname"
                type="Text"
            />
            <br />

            <label htmlFor="FavVehicleSelect">Fav Vehicle</label>
            <select id="favVehicleSelect" name="favVehicle">
                <option value="1">Cars</option>
                <option value="2">Trucks</option>
                <option value="3">Planes</option>
            </select>
            <br />

            <label htmlFor="isHappyInput">Are you Happy?</label>
            <Input type="checkbox" id="isHappyInput" name="isHappy" value="Yeah">

            <Input type="submit"/>
            
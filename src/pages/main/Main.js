import React from "react";
import ColoredComponents from "./components/ColoredComponents";
import UserForm from "./components/form/UserForm";
import LodashPractice from "./components/lodashPractice/LodashPractice";
import Task2 from "./components/Task2";


function Main(){

    

    return(
        <div className="page page-content">
            <LodashPractice/>
            <ColoredComponents/>
            <Task2/>
            <UserForm/>
        </div>
    )
}

export default Main;
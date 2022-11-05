import React, { useState } from "react";
import { Grid } from "@mui/material";
import CustTable from "./CustTable";
import EditableCard from "./EditableCard";
import EditableCard2 from "./EdiitableCard2";


function Task2() {

    const [stringState, setStringState] = useState('Hello World');      //String
    const [num, setNum] = useState(0);                                  //Float/Int
    const [isTrue, setIsTrue] = useState(false);                        //Boolean

    return (
        <Grid 
            className='p-3 my-2 cust-box' 
            container 
            spacing={2}
        >
            <Grid item xs={12} md={6}>
                <h2>Array of Objects Manipulation:</h2>
                <CustTable/>
            </Grid>
            <Grid item xs={6} md={3}>
                <h2>Object Manipulation:</h2>
                <EditableCard/>
            </Grid>
            <Grid item xs={6} md={3}>
                <h2>Diff DataTypes:</h2>
                <EditableCard2/>
            </Grid>
        </Grid>
    )

}

export default Task2;
import { Card, CardContent } from "@mui/material";
import React from "react";
import RandomBgHOC from "../../../common/components/RandomBgHOC";


function RandomCard2(props) {
    return(
        <div className='m-1' style={props.style}>
            <Card
                sx={{
                    backgroundColor: 'transparent'
                }}
            >
                <CardContent>
                    <h3>This is another randomly Colored Card. Using HOC</h3>
                    <h3>Refresh to Change Color</h3>
                </CardContent>
            </Card>
        </div>
    )
}

export default RandomBgHOC(RandomCard2);
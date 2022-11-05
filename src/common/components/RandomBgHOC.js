import React from "react";


function RandomBgHOC(WrappedComponent) {
    

    function getRandomColorCode(){
        let colorCode = '#'
        for(let i = 0; i < 3; i++){
            colorCode += Math.floor(Math.random() * 128).toString(16);          // 128 for dark colors only 256 to include light colors
        }

        return colorCode;

    }

    return((props) => {

        return(
            <WrappedComponent style={{backgroundColor: getRandomColorCode()}}/>
        )

    })
}

export default RandomBgHOC;
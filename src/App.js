import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react'
import Main from './pages/main/Main';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
});

function App (){
    return(
        <div>
            <ThemeProvider theme={darkTheme}>
                <Main/>
            </ThemeProvider>
        </div>
    )
}

export default App;
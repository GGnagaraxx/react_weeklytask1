import React, { useState } from "react";
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper 
} from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';



function CustTable(){

    const [users, setUsers] = useState([                                //Array of Objects
        {
            name: 'Sample Name',
            age: 22,
            dob: new Date('2000-05-17').toDateString()
        },
        {
            name: 'Another Name',
            age: 30,
            dob: new Date('1992-01-05').toDateString()
        },
    ])

    function handleAddAge(index){
        let tempUsers = [...users,];
        tempUsers[index].age ++;

        setUsers(tempUsers);
    }

    return(
            <TableContainer component={Paper}>
            <Table 
                sx={{ 
                    border: '1px solid grey',
                    minWidth: 500, 
                    maxHeight: 1000 
                }} 
                aria-label="simple table"
            >
                <TableHead sx={{backgroundColor: '#333333'}}>
                    <TableRow sx={{ maxHeight: 100 }}>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Date of Birth</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user, i) => (
                        <TableRow
                            key={user.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 },
                                maxHeight: 100
                            }}
                        >
                            <TableCell component="th" scope="user">
                                {user.name}
                            </TableCell>
                            <TableCell align="right">
                                {user.age}
                                <AddBoxIcon
                                    className='pointer'
                                    onClick={() => {
                                        handleAddAge(i);
                                    }}
                                />
                            </TableCell>
                            <TableCell align="right">{user.dob}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CustTable;
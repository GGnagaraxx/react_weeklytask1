import { Button, Card, CardActions, CardContent, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { Form } from "react-bootstrap";

function EditableCard(obj) {

    const [dog, setDog] = useState({                                    //Object
        name: 'Milo',
        breed: 'Shih Tzu',
        age: 4
    })
    const [editInput, setEditInput] = useState({...dog})
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
      if(editMode){
        setEditInput({
            ...dog
        })
      }
    }, [editMode])
    

    function handleOnEdit() {
        setEditMode(true);
    }

    function handleChange(e){
        setEditInput({
            ...editInput,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();

        setDog({
            ...editInput
        })
        setEditMode(false);
    }

    return (
        <Card>
            {editMode ?
                <>
                    <Form onSubmit={handleSubmit}>
                        <Stack className='p-3' spacing={2}>
                            <TextField
                                id="outlined-name"
                                name="name"
                                label="Name"
                                value={editInput.name}
                                onChange={handleChange}
                            />
                            <TextField
                                id="outlined-name"
                                name="breed"
                                label="Breed"
                                value={editInput.breed}
                                onChange={handleChange}
                            />
                            <TextField
                                id="outlined-name"
                                name="age"
                                label="Age"
                                value={editInput.age}
                                onChange={handleChange}
                            />
                        </Stack>
                        <CardActions className="center">
                            <Button 
                                type='submit'
                                variant='contained'
                                color="primary">Save</Button>
                        </CardActions>
                    </Form>
                </> :
                <>
                    <CardContent>
                        <Typography variant="h3" component='div'>
                            {dog.name}
                        </Typography>
                        <Typography variant="body1" component='div'>
                            Breed: {dog.breed}
                        </Typography>
                        <Typography variant="body1" component='div'>
                            Age: {dog.age}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <EditIcon className='pointer' onClick={handleOnEdit} />
                    </CardActions>
                </>
            }
        </Card>
    )


}

export default EditableCard;
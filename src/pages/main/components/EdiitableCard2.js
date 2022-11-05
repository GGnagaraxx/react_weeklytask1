import { Button, Card, CardActions, CardContent, Checkbox, FormControlLabel, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { Form } from "react-bootstrap";
import { InsertEmoticon } from "@mui/icons-material";

function EditableCard2(obj) {

    const [item, setItem] = useState('Sardines');
    const [amt, setAmt] = useState(1);
    const [checked, setChecked] = useState(false);
    const [editInput, setEditInput] = useState({
        item: item,
        amt: amt,
        checked: checked,
    })
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {

        if(editMode){
            setEditInput({
                item: item,
                amt: amt,
                checked: checked
            })
        }

    }, [editMode])

    function handleOnEdit() {
        setEditMode(true);
    }

    function handleChange(e) {
        if (e.target.name == 'checked') {
            setEditInput({
                ...editInput,
                [e.target.name]: e.target.checked
            })
        } else {
            setEditInput({
                ...editInput,
                [e.target.name]: e.target.value
            })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        setItem(editInput.item);
        setAmt(editInput.amt);
        setChecked(editInput.checked);

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
                                name="item"
                                label="Item"
                                value={editInput.item}
                                onChange={handleChange}
                            />
                            <TextField
                                id="outlined-name"
                                name="amt"
                                label="Amount"
                                value={editInput.amt}
                                onChange={handleChange}
                            />
                            <div>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="checked"
                                            defaultChecked={editInput.checked}
                                            onChange={handleChange}
                                        />}
                                    label="Bought"
                                />
                            </div>
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
                            {item}
                        </Typography>
                        <Typography variant="body1" component='div'>
                            Amount: {amt}
                        </Typography>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    disabled
                                    checked={checked}
                                />}
                            label="Bought"
                        />
                    </CardContent>
                    <CardActions>
                        <EditIcon className='pointer' onClick={handleOnEdit} />
                    </CardActions>
                </>
            }
        </Card>
    )


}

export default EditableCard2;
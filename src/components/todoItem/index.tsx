import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Edit from '@mui/icons-material/Edit';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';

function TodoItem(props:any) {
    const { text, checked } = props;
    const [toggleEdit, setToggleEdit] = useState(false)
    const [inputText, setInputText] = useState(text);
    const [isChecked, setIsChecked] = useState(checked);

    const onInputChanged = (event: any) => {
        setInputText(event.target.value);
    }

    const onCheckBoxChanged = (event: any) => {
        setIsChecked(event.target.checked);
    }

    const onInputConfirmed = () => {
        setToggleEdit(false);
    }

    const onInputCanceled = () => {
        setInputText(text);
        setToggleEdit(false);
    }

    return (
        <Stack sx={{
            alignContent: 'center',
            alignItems: 'center',
            border: '1px solid lightgrey',
            borderRadius: "1000000000000px",
            mb: '0.25em'
        }} direction="row">
            <Checkbox checked={isChecked} onChange={onCheckBoxChanged} />
            {toggleEdit ? 
                <TextField sx={{
                    flexGrow: 1
                }} value={inputText} onChange={onInputChanged} variant="standard" autoFocus />
                :
                <Typography sx={{
                    flexGrow: 1,
                    textDecoration: isChecked ? "line-through" : "none",
                    color: isChecked ? "lightgrey" : "black"
                }} variant="body1" component="div">
                    {inputText}
                </Typography>
            }
            {toggleEdit ? 
                <>
                    <IconButton sx={{
                        border: '1px solid lightgrey'
                    }} children={<Check />} onClick={onInputConfirmed} />
                    <IconButton sx={{
                        border: '1px solid lightgrey'
                    }} children={<Close />} onClick={onInputCanceled} />
                </>
                :
                <IconButton sx={{
                    border: '1px solid lightgrey'
                }} children={<Edit />} onClick ={() => setToggleEdit(true)} />
            }
        </Stack>
    )
}

export default TodoItem;
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState.js';

const AddForm = ({ saveToDo }) => {
    const {value, reset, onChange} = useInputState('');
    return (

        <form onSubmit={event => {
            event.preventDefault();
            saveToDo(value);
            reset();
        }
        }>
            <TextField variant="outlined" placeholder="Add todo.." margin="normal"
                onChange={onChange}
                value={value}            />
        </form>
        )
}

export default AddForm;
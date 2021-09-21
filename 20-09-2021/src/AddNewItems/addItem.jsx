import React, { useState } from 'react';
import NewList from './NewComponent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
const AddItem = () => {
  const [listData, setlistData] = useState([]);
  const [text, settext] = useState('');

  const newList = () => {
    const regExp = /^[a-zA-Z]+$/;
    if (!regExp.test(text)) {
      alert('Please enter your valid name');
      return false;
    } else {
      const ListData = [...listData];
      const toDos = { todos: text };
      ListData.push(toDos);

      setlistData(ListData);
      settext('');
    }
  };

  const handeleChange = (event) => {
    settext(event.target.value);
  };
  const handleDelete = (toDo) => {
    const ListData = listData.filter((m) => m !== toDo);
    setlistData(ListData);
  };

  return (
    <>
      <Typography align="center">
        <h1>toDo List</h1>
        <h6>
          <label htmlFor="fname">
            Add Todo:
            <TextField
              required
              id="filled-required"
              label="Required"
              variant="filled"
              size="small"
              value={text}
              onChange={handeleChange}
            />
          </label>
        </h6>
        <Button
          variant="contained"
          color="primary"
          aria-label="contained primary button"
          onClick={() => {
            newList();
          }}
          type="submit"
        >
          {' '}
          add
        </Button>
      </Typography>
      <NewList listDataArr={listData} onDelete={handleDelete} />
    </>
  );
};

AddItem.propTypes = {
  listData: PropTypes.array,
  text: PropTypes.string,
};
export default AddItem;

import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const NewList = (props) => {
  const { listDataArr, onDelete } = props;

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Add todo List</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {' '}
          {listDataArr.map((val) => (
            <TableRow key={Math.random().toString(36).substr(2, 9)}>
              <TableCell>{val.todos}</TableCell>
              <TableCell>
                <button
                  onClick={() => onDelete(val)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NewList;
import React, { useEffect } from "react";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { loadUsers, deleteUser } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup } from "@material-ui/core";
import axios from 'axios';
import * as API from '../redux/api';
import {useNavigate} from 'react-router-dom';

function createData (number, bookId, bookName, category, author) {
  return { number, bookId, bookName, category, author };
}

const rows = [
  createData(1, 101, "Engg.Mathematics - M2", "Subject", "A.Ganesh"),
  createData(2, 102, "C", "Programming lang", "Mike"),
  createData(3, 103, "Science", "General", "Stephen Jay"),
  createData(4, 104, "JAVA", "Programming lang", "James"),
  createData(5, 105, "French", "Language", "Victor Hugo")
];

export default function AddBooks() {
  let dispatch = useDispatch();
  const { users } = useSelector(state => state.data);
  const navigate = useNavigate();

  useEffect(() => {
  dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    if(window.confirm("Are you sure, want to delete the user ?")) {
        dispatch(deleteUser(id))
    }
  };

  return (
    <div>
      <Button variant = "contained" color = "primary" onClick = {() => navigate("/insertbooks")}>Add Books</Button>
    <TableContainer component = {Paper}>
      <Table aria-label = "customized table">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align = "center">Book Id</TableCell>
            <TableCell align = "center">Book Name</TableCell>
            <TableCell align = "center">Category</TableCell>
            <TableCell align = "center">Author</TableCell>
            <TableCell align = "center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && rows.map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
                {user.number}
              </TableCell>
              <TableCell align = "center">{user.bookId}</TableCell>
              <TableCell align = "center">{user.bookName}</TableCell>
              <TableCell align = "center">{user.category}</TableCell>
              <TableCell align = "center">{user.author}</TableCell>
              <TableCell align = "center">
                <ButtonGroup variant = "contained" aria-label = "contained primary button group">
                  <Button color = "primary">Edit</Button>
                  <Button color = "secondary" onClick = {() => handleDelete(user.id)}>Delete</Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}



// ***---------------****

// import React, { useEffect } from 'react';
// // import 'bootstrap/dist/css/bootstrap.css';
// import Table from 'react-bootstrap/Table'
// import { loadUsers } from '../redux/action';
// import { useDispatch, useSelector } from 'react-redux';

// function AddBooks() {
//   let dispatch = useDispatch();
//   const { users } = useSelector(state => state.data);

//   useEffect(() => {
//     dispatch(loadUsers());
//   }, []);
//   return (
//     <div>
// <Table striped bordered hover>
//     <thead>
//     <tr>
//       <th>S.no</th>
//       <th>Book Name</th>
//       <th>Book Id</th>
//       <th>Author</th>
//       <th>Category</th>
//     </tr>
//     </thead>
//   <tbody>
//     <tr>
//       <td>1</td>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <td>2</td>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <td>3</td>
//       <td colSpan={2}>Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </Table>
//     </div>
//   )
// }

// export default AddBooks;
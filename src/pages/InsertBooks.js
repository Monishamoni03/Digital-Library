import React, { useState } from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/action';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 100,

    }
}))
function InsertBooks() {
    const classes = useStyles();
    let dispatch = useDispatch();
    const navigate = useNavigate();
    const [state, setState] = useState({
        bookId: "",
        bookName: "", 
        category: "", 
        author: "",
    });

    const [error, setError] = useState("");

    const {bookId, bookName, category, author} = state;

    const handleInput = (e) => {
        let { bookId, value} = e.target;
        setState({...state, [bookId]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!bookId || !bookName || !category || !author) {
          setError("*Please fill all the input fields*");
        } else {
          dispatch(addUser(state));
          // history.push("/login");
          navigate('/adminbooks');
          // setError("");
        }

    }
  return (
    <div>
        <Button style= {{marginTop: "30px"}} variant = 'contained' color = 'secondary' onClick = {() => navigate("/adminbooks")}>Go Back</Button>
        <h2>Inserting Books</h2>
        {error && <h6 style = {{color: "red" }}>{error}</h6>}
        <form className = {classes.root} onSubmit = {handleSubmit}>
         <TextField id="standard-basic" label = "Book Id" value = {bookId} name = 'bookId' type = "number" onChange = {handleInput} /><br />
         <TextField id="standard-basic" label="Book Name" value = {bookName} name = 'bookName' type = "text" onChange = {handleInput} /><br />
         <TextField id="standard-basic" label="Category" value = {category} name = 'category' type = "text" onChange = {handleInput} /><br />
         <TextField id="standard-basic" label="Author" value = {author} name = 'author' type = "text"  onChange = {handleInput} /><br />
         <Button style= {{marginTop: "30px"}} variant = 'contained' color = 'primary' type = 'submit'>Add Book</Button>
        </form>

    </div>
  )
}

export default InsertBooks;
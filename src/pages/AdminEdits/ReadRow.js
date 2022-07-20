import React from 'react';

const ReadRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
        <td>{contact.bookId}</td>
        <td>{contact.bookName}</td>
        <td>{contact.category}</td>
        <td>{contact.author}</td>
        <td>
          <button type = 'button' onClick = {(event) => handleEditClick(event, contact)}>Edit</button>
          <button type = 'button' onClick = {() => handleDeleteClick(contact.id)}>Delete</button>
        </td>
    </tr>
  );
}

export default ReadRow;
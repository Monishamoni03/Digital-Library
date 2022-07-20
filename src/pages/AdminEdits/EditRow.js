import React from 'react';

const EditRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
// class EditRow extends Component {
//  render({ editFormData, handleEditFormChange, handleCancelClick}) {
  return (
    <tr>
        <td>
            <input type = "number" required = "required" placeholder = "Enter a book id" name = "bookId" value = {editFormData.bookId} onChange = {handleEditFormChange} />
        </td>
        <td>
            <input type = "text" required = "required" placeholder = "Enter a book name" name = "bookName" value = {editFormData.bookName} onChange = {handleEditFormChange} />
        </td>
        <td>
            <input type = "text" required = "required" placeholder = "Enter the category" name = "category" value = {editFormData.category} onChange = {handleEditFormChange} />
        </td>
        <td>
            <input type = "text" required = "required" placeholder = "Enter the author" name = "author" value = {editFormData.author} onChange = {handleEditFormChange} />
        </td>
        <td>
            <button type = "submit">Save</button>
            <button type = "button" onClick = {handleCancelClick}>Cancel</button>
        </td>
    </tr>
  );
 }

export default EditRow;
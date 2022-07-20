import React, { useState } from 'react';
import data from "./mock-data.json";
import { nanoid } from 'nanoid';
import '../assets/css/AdminBooks.css';
import ReadRow from "./AdminEdits/ReadRow";
import EditRow from './AdminEdits/EditRow';

// class AdminBooks extends Component {
//   render() {
const AdminBooks = () => {
    const [contacts, setContacts] = useState(data);
    const [addData, setAddData] = useState({
        bookId: '',
        bookName: '',
        category: '',
        author: '',
    });

    const [editFormData, setEditFormData] = useState({
        bookId: '',
        bookName: '',
        category: '',
        author: '',
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleAddInput = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newData = { ...addData };
        newData[fieldName] = fieldValue;

        setAddData(newData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newData = { ...editFormData };
        newData[fieldName] = fieldValue;
    
        setEditFormData(newData);
      };

    const handleAddBookSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            bookId: addData.bookId,
            bookName: addData.bookName,
            category: addData.category,
            author: addData.author,
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditBookSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            bookId: editFormData.bookId,
            bookName: editFormData.bookName,
            category: editFormData.category,
            author: editFormData.author,
        };
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === editContactId);

        newContacts[index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            bookId: contact.bookId,
            bookName: contact.bookName,
            category: contact.category,
            author: contact.author,
        };
        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditContactId(null);
      };
    
    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];
    
        const index = contacts.findIndex((contact) => contact.id === contactId);
    
        newContacts.splice(index, 1);
    
        setContacts(newContacts);
    };

    return (
      <div className = 'app-container'>
          <form className = 'admin-form' onSubmit = {handleEditBookSubmit}>
          <table>
              <thead>
                  <tr>
                      <th>Book Id</th>
                      <th>Book Name</th>
                      <th>Category</th>
                      <th>Author</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  {contacts.map((contact) => (
                      <>
                        {editContactId === contact.id ? (
                       <EditRow
                         editFormData={editFormData}
                         handleEditFormChange={handleEditFormChange}
                         handleCancelClick={handleCancelClick}
                        />
                        ) : (
                        <ReadRow
                         contact={contact}
                         handleEditClick={handleEditClick}
                         handleDeleteClick={handleDeleteClick}
                        />
                        )}
                      </>
                  ))}
    
              </tbody>
          </table>
          </form>

          <h2>Insert Books</h2>
          <form classname = 'admin-form' onSubmit = {handleAddBookSubmit}>
              <input type = "number" name = "bookId" required = "required" placeholder = "Enter a book id" onChange = {handleAddInput} />
              <input type = "text" name = "bookName" required = "required" placeholder = "Enter a book name" onChange = {handleAddInput} />
              <input type = "text" name = "category" required = "required" placeholder = "Enter the category" onChange = {handleAddInput} />
              <input type = "text" name = "author" required = "required" placeholder = "Enter the author" onChange = {handleAddInput} />
              <button type = "submit">Add Books</button>
          </form>

      </div>
    );
  }

export default AdminBooks;
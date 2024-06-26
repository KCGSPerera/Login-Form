import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import { registerUser, updateUser, getUser, getUsers, deleteUser } from './services/api';
import { Container, Grid, Button, List, ListItem, ListItemText, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response.data.data);
  };

  const handleRegister = async (userData) => {
    await registerUser(userData);
    fetchUsers();
  };

  const handleUpdate = async (userData) => {
    await updateUser(selectedUser._id, userData);
    fetchUsers();
    setSelectedUser(null);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  const handleEdit = async (id) => {
    const response = await getUser(id);
    setSelectedUser(response.data.data);
  };

  const handleViewProfile = async (id) => {
    const response = await getUser(id);
    setSelectedUser(response.data.data);
    setProfileDialogOpen(true);
  };

  const handleCloseProfileDialog = () => {
    setProfileDialogOpen(false);
    setSelectedUser(null);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <UserForm user={selectedUser} onSubmit={selectedUser ? handleUpdate : handleRegister} />
        </Grid>
        <Grid item xs={12}>
          <List>
            {users.map((user) => (
              <ListItem key={user._id} secondaryAction={
                <>
                  <Button onClick={() => handleViewProfile(user._id)}>View Profile</Button>
                  <Button onClick={() => handleEdit(user._id)}>Edit</Button>
                  <Button onClick={() => handleDelete(user._id)}>Delete</Button>
                </>
              }>
                <ListItemText primary={`${user.firstname} ${user.lastname}`} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
      <Dialog open={profileDialogOpen} onClose={handleCloseProfileDialog}>
        <DialogTitle>User Profile</DialogTitle>
        <DialogContent>
          {selectedUser && (
            <DialogContentText>
              <strong>First Name:</strong> {selectedUser.firstname}<br />
              <strong>Last Name:</strong> {selectedUser.lastname}<br />
              <strong>Email:</strong> {selectedUser.email}<br />
              <strong>Phone Number:</strong> {selectedUser.phonenumber}<br />
              <strong>Address 1:</strong> {selectedUser.address1}<br />
              <strong>Address 2:</strong> {selectedUser.address2}<br />
              <strong>Age:</strong> {selectedUser.age}<br />
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseProfileDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default App;

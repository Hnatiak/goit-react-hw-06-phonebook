import { createSlice } from '@reduxjs/toolkit';

{
  contacts: [
    {id: '1', name: 'Oleg', number: '325-56-21'},
    {id: '2', name: 'Alex', number: '365-12-61'},
    {id: '3', name: 'Kira', number: '472-36-89'},
    {id: '4', name: 'Margo', number: '398-26-21'},
  ],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,

  reducers: {
    addNewContact(state, action) {
     state.contacts.push(action.payload)
    },

    deleteContact(state, action) {
     state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
    },

    setFilter(state, action) {
    state.filter = action.payload
        }
  },
});

export const { addNewContact, deleteContact, setFilter } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
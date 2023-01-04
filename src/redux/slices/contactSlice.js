import { createSlice } from '@reduxjs/toolkit';
import { defaultItem } from 'utils/DefaultItem';

export const myContactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: defaultItem,
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },

    remove(state, action) {
      const index = state.contacts.findIndex(
        task => task.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});
export const { addContact, remove } = myContactSlice.actions;

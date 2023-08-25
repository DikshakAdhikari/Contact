import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Contact{
    id:number;
    name: string;
    email:string;
}

interface ContactState{
    contacts: Contact[]
}

const initialState:ContactState = {
    contacts: [],
}

export const ContactSlice= createSlice({
    name:"contact",  //name of the slice
    initialState,
    reducers: { //reducers are the objects that contains our actions. actions are functions that can mutate our state. ex- we have addContact action that we use to add a new contact to our contact list
        addContact: (state, action:PayloadAction<{name: string, email: string}>) => {
            state.contacts.push({
                id: state.contacts.length+1,
                name: action.payload.name,
                email:action.payload.email

            });
        },
        updateContact: (state, action: PayloadAction<{ id: number; updatedData: Partial<Contact> }>) => {
            const { id, updatedData } = action.payload;
            const contactIndex = state.contacts.findIndex(contact => contact.id === id);
      
            if (contactIndex !== -1) {
              state.contacts[contactIndex] = { ...state.contacts[contactIndex], ...updatedData };
            }
          },

    }
})

export default ContactSlice.reducer;
export const {addContact} = ContactSlice.actions;
export const { updateContact } = ContactSlice.actions;
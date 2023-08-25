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
        }

    }
})

export default ContactSlice.reducer;
export const {addContact} = ContactSlice.actions;
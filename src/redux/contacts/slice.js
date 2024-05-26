import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './operations'

const handlePending = (state) => {
state.loading = true
}
const handleRejected = (state) => {
    state.loading = false
    state.error = true
}

const slice = createSlice({
    name: 'contatcs',
    initialState:  {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = true
            if (action.payload.length > 0) {
                state.items = action.payload
            } 
            state.loading = false
        })
        .addCase(fetchContacts.rejected, handleRejected)
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, (state, action) => {
            state.loading = true
         state.items.push(action.payload)
         state.loading = false
        })
        .addCase(addContact.rejected, handleRejected)
        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = true
        state.items = state.items.filter(contact => contact.id !== action.payload)
        state.loading = false
        })
        .addCase(deleteContact.rejected, handleRejected)
        
    }
})
export default slice.reducer
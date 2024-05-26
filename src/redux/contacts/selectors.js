import { createSelector } from "@reduxjs/toolkit"
import { selectFilterName } from '../filters/selectors'
export const selectLoading = state => state.contacts.loading
export const selectError = state => state.contacts.error
export const selectContacts = state => state.contacts.items
export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilterName],
    (contacts, filterParam) => {
      return contacts.filter(contact => contact.name.toLowerCase().includes(filterParam.toLowerCase()))
    }
)
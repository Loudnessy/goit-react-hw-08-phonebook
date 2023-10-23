import { addContact, fetchContacts } from "api/api";
export const submit = async (evt, dispatch, contacts) => {
    const formReset = () => {
        evt.target.name.value = ""
        evt.target.querySelector('input[type="tel"]').value = ""
    }
    const contactObject = {name: evt.target.name.value, number: evt.target.querySelector('input[type="tel"]').value}
      if (contacts.find(contact => contact.name.toUpperCase() === contactObject.name.toUpperCase())) {
        alert(`${contactObject.name} is already in the contacts`)
      } else {
        await dispatch(addContact(contactObject))
    await dispatch(fetchContacts())
      }
   await formReset()
} 
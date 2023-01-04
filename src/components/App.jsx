import { useDispatch, useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

import { addContact, remove } from 'redux/slices/contactSlice';
import { contactFilter } from 'redux/slices/filterSlice';

export default function App() {
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filter.filter);
    const dispatch = useDispatch();

    const addContacts = ({ id, name, number }) => {
        if (
            contacts.find(contact => {
                return contact.name === name;
            })
        ) {
            return alert(`${name} is already in contacts`);
        }

        const contact = {
            id,
            name,
            number,
        };
        dispatch(addContact(contact));
    };

    const filterChange = e => {
        dispatch(contactFilter(e.currentTarget.value));
    };

    const filterContact = contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
        <div className={css.container}>
            <h1>Phonebook</h1>
            <ContactForm addContacts={addContacts} />
            <h2>Contacts</h2>
            <Filter filter={filterChange} />
            <ContactList filter={filterContact} onDeleteContact={remove} />
        </div>
    );
}
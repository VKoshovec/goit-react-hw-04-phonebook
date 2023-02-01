
import { useState, useEffect } from "react";
import css from './phoneBook.module.css';
import ContactList from "./ContactList/ContactList";
import ContactAddForm from "./ContactAddForm/ContactAddForm";
import ContactFilter from "./ContactFilter/ContactFilter";

const App = () => {

    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState ('');

    const addContacts = (newContact) => {

        const newContacts  = [];

        const isPresentContact = contacts.find(element => 
            element.name.toLowerCase() === newContact.name.toLowerCase()
        ) ? true: false;
        
        
        if (isPresentContact){
            alert(`${newContact.name} is already in contacts.`)
        } else {
            newContacts.push(...contacts);
            newContacts.push(newContact);
            setContacts(newContacts);
        }        
    };

    const fileteredContacts = (filterName) => {

        return contacts.filter(contact =>      
             contact.name.toLowerCase().includes(filterName.toLowerCase()))
    };

    const deleteContact = (e) => {
        const delContact = e.currentTarget.name;
        const newStateContacts = contacts.filter(element=> element.name !== delContact);
        setContacts (newStateContacts);
    };

    useEffect (() => {
        const LocalStoragePhonebook = localStorage.getItem('LocalPhonebook');
        const LocalPhonebook = JSON.parse(LocalStoragePhonebook);

        if (LocalPhonebook?.length) {
            setContacts ( LocalPhonebook );
        };        
    }, []);

    useEffect (()=>{
        localStorage.setItem ('LocalPhonebook', JSON.stringify(contacts))
    }, [contacts]);
    
    const contactList = filter ? fileteredContacts(filter) : contacts;

    return (
        <div className= {css.phoneBook}>
            <h1>Phonebook</h1>
            <ContactAddForm onSubmit = { res => addContacts(res) } />
            <h2>Contacts</h2>
            <ContactFilter onChange = { filter => setFilter(filter) } value={ filter }/>
            <ContactList contactArr={ contactList } onClick = { deleteContact }/>
        </div>
    );
}

export default App;
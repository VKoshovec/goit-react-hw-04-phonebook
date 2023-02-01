
import { Component } from "react";
import css from './phoneBook.module.css';
import ContactList from "./ContactList/ContactList";
import ContactAddForm from "./ContactAddForm/ContactAddForm";
import ContactFilter from "./ContactFilter/ContactFilter";


class App extends Component {

    state = {
        contacts: [],
        filter: '' 
    };

    addContact = (newContact) => {

        const newContacts  = [];
        const currentContacts = this.state.contacts;

        const isPresentContact = currentContacts.find(element => 
            element.name.toLowerCase() === newContact.name.toLowerCase()
        ) ? true: false;
        
        
        if (isPresentContact){
            alert(`${newContact.name} is already in contacts.`)
        } else {
            newContacts.push(...currentContacts);
            newContacts.push(newContact);
            this.setState({contacts: newContacts});
        }        
    };

    addFilter = (newFilter) => {
        this.setState({
            filter: newFilter,
        })
    };

    fileteredContacts = (filterName) => {
        const currentContacts = this.state.contacts;

        return currentContacts.filter(contact =>      
             contact.name.toLowerCase().includes(filterName.toLowerCase()))
    };

    deleteContact = (e) => {
        const currentContacts = this.state.contacts;
        const delContact = e.currentTarget.name;
        const newStateContacts = currentContacts.filter(element=> element.name !== delContact);
        this.setState(
           { contacts: newStateContacts } 
        );
    };

    componentDidMount(){       
        const LocalStoragePhonebook = localStorage.getItem('LocalPhonebook');
        const LocalPhonebook = JSON.parse(LocalStoragePhonebook);

        if (LocalPhonebook?.length) {
            this.setState({contacts: LocalPhonebook});
        }; 
    }

    componentDidUpdate (prevProps, prevState) {
        const prevConatcts = prevState.contacts;
        const currentContacts = this.state.contacts;

        if (currentContacts !== prevConatcts) {
            localStorage.setItem ('LocalPhonebook', JSON.stringify(currentContacts));
        }
    }

    render () {
        
        const filterStatus = this.state.filter;
        const currentContactList = this.state.contacts;
        const contactList = filterStatus ? this.fileteredContacts(filterStatus) : currentContactList;

        return (
        <div className= {css.phoneBook}>
            <h1>Phonebook</h1>
            <ContactAddForm onSubmit = { res => this.addContact(res) } />
            <h2>Contacts</h2>
            <ContactFilter onChange = { filter => this.addFilter(filter) } value={ filterStatus }/>
            <ContactList contacts={ contactList } onClick = { this.deleteContact }/>
        </div>
        )
    }
}

export default App;

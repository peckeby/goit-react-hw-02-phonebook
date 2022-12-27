import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';

import ContactList from './ContactList/ContactList';
import Section from './Section/Section';
import SearchBar from './SearchBar/SearchBar';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  fiterChange = (contacts, filter) => {
    const newContacts = contacts.filter(contact => {
      return contact.name.toLowerCase() === filter.toLowerCase();
    });
    return newContacts;
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  addNewContact = (name, tel) => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          name: `${name}`,
          id: nanoid(),
          tel: `${tel}`,
        },
      ],
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const nameValue = form.elements.name.value;
    const telNum = form.elements.number.value;
    if (this.fiterChange(this.state.contacts, nameValue).length > 0) {
      alert(`${nameValue} is already in contacts.`);
    } else {
      this.addNewContact(nameValue, telNum);
    }
    form.reset();
  };

  handleDelete = evt => {
    const { contacts } = this.state;
    const listItem = evt.currentTarget.parentNode;
    const itemId = listItem.getAttribute('id');
    this.setState({
      contacts: contacts.filter(contact => contact.id !== itemId),
    });
    return contacts;
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <Section title="Phonebook"></Section>
        <Section title="Contacts">
          <ContactForm
            submitHandler={this.handleSubmit}
            handleChange={this.handleChange}
          ></ContactForm>
          {contacts.length > 0 && (
            <SearchBar
              filter={filter}
              handleChange={this.handleChange}
            ></SearchBar>
          )}
          {filter.length > 0 ? (
            <ContactList
              contacts={this.fiterChange(contacts, filter)}
              handleDelete={this.handleDelete}
            ></ContactList>
          ) : (
            <ContactList
              contacts={contacts}
              handleDelete={this.handleDelete}
            ></ContactList>
          )}
        </Section>
      </>
    );
  }
}

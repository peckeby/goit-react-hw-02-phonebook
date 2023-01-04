import PropTypes from 'prop-types';

import {
  ListContacts,
  DeleteBtn,
  ListContactsItem,
} from './ContactList.styled';

export default function ContactList({ contacts, handleDelete }) {
  return (
    <ListContacts>
      {contacts.map(contact => (
        <ListContactsItem name={contact.name} id={contact.id} key={contact.id}>
          <p>
            {contact.name}: {contact.tel}
          </p>
          <DeleteBtn type="button" onClick={handleDelete}>
            Delete
          </DeleteBtn>
        </ListContactsItem>
      ))}
    </ListContacts>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      id: PropTypes.string,
      tel: PropTypes.string,
    })
  ),
  handleDelete: PropTypes.func,
};

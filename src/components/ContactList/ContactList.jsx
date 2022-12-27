export default function ContactList({ contacts, handleDelete }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li name={contact.name} id={contact.id} key={contact.id}>
          <p>
            {contact.name}: {contact.tel}
          </p>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

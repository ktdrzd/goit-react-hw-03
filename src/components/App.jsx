import { ContactList } from './contact list/ContactList';
import { ContactForm } from './contact form/ContactForm';
import { SearchBox } from './search box/SearchBox';
import { useEffect, useState } from 'react';

const getInitialContacts = () => {
  const savedContacts = window.localStorage.getItem('saved-contacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }

  return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};

function App() {
  // Contact
  const [contacts, setContacts] = useState(getInitialContacts());
  const [filter, setFilter] = useState('');

  const onAddContact = (newContact) => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const onDelete = (id) => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== id);
    })
  }

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Search box
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ color: 'black', marginLeft: '30px' }}>Phonebook</h1>
      <ContactForm onAdd={onAddContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={onDelete}/>
    </div>
  );
}

export default App;

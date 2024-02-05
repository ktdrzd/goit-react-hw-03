import { ContactList } from './contact list/ContactList';
import { ContactForm } from './contact form/ContactForm';
import { SearchBox } from './search box/SearchBox';
import { useEffect, useState } from 'react';


function App() {
  // Contact
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

    useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Search box
  const [filter, setFilter] = useState("");
  const onFilter  = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));
  // 

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onChange={setFilter}/>
      <ContactList contacts={onFilter} />
    </div>
  );
}

export default App;

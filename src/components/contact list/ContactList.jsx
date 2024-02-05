import { Contact } from '../contact/Contact';
import style from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <ul className={style.list}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

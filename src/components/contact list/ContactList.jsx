import { Contact } from '../contact/Contact';
import style from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={style.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={style.item}>
          <Contact contact={contact} onDelete={onDelete}/>
        </li>
      ))}
    </ul>
  );
};

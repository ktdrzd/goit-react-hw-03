import style from './Contact.module.css';
import { FaUser, FaPhoneAlt } from "react-icons/fa";

export const Contact = ({contact: { name, number, id}, onDelete}) => {
  return (
    <div className={style.item}>
      <div className={style.info}>
        <p className={style.user}><FaUser className={style.icon}/> {name}</p>
        <p className={style.number}><FaPhoneAlt className={style.icon}/> {number}</p>
      </div>
      <button onClick={() => onDelete(id)} className={style.button}>Delete</button>
    </div>
  )
};

import { useId } from 'react';
import style from './SearchBox.module.css';

export const SearchBox = ({ value, onChange }) => {
  const id = useId();
  return (
    <div className={style.search}>
      <label className={style.text} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={evt => onChange(evt.target.value)}
        className={style.input}
      />
    </div>
  );
};

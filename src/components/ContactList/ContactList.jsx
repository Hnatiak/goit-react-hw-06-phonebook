import React from "react";
import css from "./ContactList.module.css";
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import phonebookActions from "../../redux/app/app-actions";
import {
  getContacts,
  getFilter,
} from "../../redux/app/app-selectors";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.wrapper}>
          <span className={css.icon}>
            <FaUserAlt />
          </span>
          <p className={css.span}>
            {name}: {number}
          </p>

          <button
            className={css.button}
            type="button"
            onClick={() => dispatch(phonebookActions.deleteContact(id))}
          >
            <FaTrash />
          </button>
        </li>
      ))}
    </ul>
  );
}
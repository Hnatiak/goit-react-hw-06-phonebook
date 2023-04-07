// import React from "react";
// import css from "./ContactList.module.css";
import { FaTrash, FaUserAlt } from 'react-icons/fa';
// import { useSelector, useDispatch } from "react-redux";
// import phonebookActions from "../../redux/app/app-actions";
// import {
//   getContacts,
//   getFilter,
// } from "../../redux/app/app-selectors";

// export default function ContactList() {
//   const contacts = useSelector(getContacts);
//   const filter = useSelector(getFilter);
//   const dispatch = useDispatch();

//   const filteredContacts = contacts.filter(({ name }) =>
//     name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <ul className={css.contactList}>
//       {filteredContacts.map(({ id, name, number }) => (
//         <li key={id} className={css.wrapper}>
//           <span className={css.icon}>
//             <FaUserAlt />
//           </span>
//           <p className={css.span}>
//             {name}: {number}
//           </p>

//           <button
//             className={css.button}
//             type="button"
//             onClick={() => dispatch(phonebookActions.deleteContact(id))}
//           >
//             <FaTrash />
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { getFilterValue, getContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';


export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const normalizedFilter = filterValue.toLowerCase();
  const dispatch = useDispatch();
  

const filteredContacts = () => {
  return (
    contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
    ))
  };

  const contactsFilter = filteredContacts();
  
  return (
    <div>
      <ul className={css.contactList}>
        {contactsFilter.map(({ id, name, number }) => (
          <li key={id} className={css.wrapper}>
            <span className={css.icon}>
             <FaUserAlt />
            </span>
            <span className={css.span}>{`${name}: ${number}`}</span>
            <button
              type="button"
              className={css.button}
              onClick={() => dispatch(deleteContact(id))}
            >
              <FaTrash />
            </button>
          </li>
        )
        )}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

// export const ContactListItem = ({ name, number,toDelete,id }) => {
//   return (
//       <li>
//           <p> {name}: {number}</p>
//           <button onClick={() =>toDelete(id) }>Delete</button>
//       </li>
//   )
// }

// ContactListItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.number.isRequired
// }

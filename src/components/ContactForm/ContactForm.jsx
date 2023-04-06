import React, { useState } from "react";
import css from "./ContactForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import phonebookActions from "../../redux/app/app-actions";
import { getContacts } from "../../redux/app/app-selectors";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleContactData = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const checkExistAndAdd = (newContact) => {
    contacts.some(
      (contact) =>
        contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase() ||
        contacts.some((contact) => contact.number === newContact.number)
    )
      ? alert(
          `Friend ${newContact.name} or number ${newContact.number} is alredy exist`
        )
      : dispatch(phonebookActions.addContact(newContact));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkExistAndAdd({ name, number });
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
      <span className={css.title}>Name</span>
        <input
          className={css.input}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleContactData}
        />
      </label>

      <label className={css.label}>
      <span className={css.title}>Number</span>
        <input
          className={css.input}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleContactData}
        />
      </label>

      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
}
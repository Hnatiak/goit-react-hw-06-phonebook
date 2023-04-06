import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import css from "./App.module.css";

export default function App() {

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phone<span className={css.title__color}>book</span></h1>
      <ContactForm />

      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
import types from "./app-types";
import { createAction } from "@reduxjs/toolkit";
import { uuid } from "uuidv4";

const addContact = createAction("app/addContact", (contactData) => {
  return {
    payload: {
      id: uuid(),
      name: contactData.name,
      number: contactData.number,
    },
  };
});

const deleteContact = createAction("app/deleteContact");
const filterSet = createAction("app/setFilterArr");

export default { addContact, deleteContact, filterSet };
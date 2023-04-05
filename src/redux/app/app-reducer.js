import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./app-actions";
//import types from "./app-types";

const initialContacts = [
  { id: "id-1", name: "Iryna Lysyk", number: "369-12-46" },
  { id: "id-2", name: "Karina Line", number: "123-89-02" },
  { id: "id-3", name: "I was online", number: "565-37-19" },
  { id: "id-4", name: "Annie Copeland", number: "287-91-06" },
];

const contacts = createReducer([...initialContacts], {
  [actions.addContact]: (state, { type, payload }) => {
    let nameArray = state.map((cur) => cur.name);
    if (!nameArray.includes(payload.name)) {
      return [...state, payload];
    } else {
      alert("Такий контакт уже існує!");
      return state;
    }
  },
  [actions.deleteContact]: (state, { types, payload }) => {
    let newArrAfterDel = state.filter((elem) => elem.id !== payload);
    return [...newArrAfterDel];
  },
});

const filter = createReducer("", {
  [actions.filterSet]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({ contacts, filter });
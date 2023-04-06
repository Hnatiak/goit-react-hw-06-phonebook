import React from "react";
import css from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import phonebookActions from "../../redux/app/app-actions";
import { getFilter } from "../../redux/app/app-selectors";

export default function Filter() {
  const inputValue = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <label className={css.label}>
      <p className={css.text}>Find contacts by name</p>
        <input
          className={css.input}
          type="text"
          value={inputValue}
          onChange={(e) =>
            dispatch(phonebookActions.changeFilter(e.target.value))
          }
        />
      </label>
    </>
  );
}
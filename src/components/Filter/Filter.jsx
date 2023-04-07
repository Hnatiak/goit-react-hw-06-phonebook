// import React from "react";
// import css from "./Filter.module.css";
// import { useSelector, useDispatch } from "react-redux";
// import phonebookActions from "../../redux/app/app-actions";
// import { getFilter } from "../../redux/app/app-selectors";

// export default function Filter() {
//   const inputValue = useSelector(getFilter);
//   const dispatch = useDispatch();
//   return (
//     <>
//       <label className={css.label}>
//       <p className={css.text}>Find contacts by name</p>
//         <input
//           className={css.input}
//           type="text"
//           value={inputValue}
//           onChange={(e) =>
//             dispatch(phonebookActions.changeFilter(e.target.value))
//           }
//         />
//       </label>
//     </>
//   );
// }

import css from "./Filter.module.css";
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

export const Filter = () => {
    
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value.toLowerCase();

    dispatch(setFilter(value));
  };

  return (
    <label className={css.label}>
      <p className={css.text}>Find contacts by name</p>
      <input className={css.input} type="name" onChange={onChange} />
    </label>
  );
};
import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import appActions from "./redux/app/app-actions";
import { connect } from "react-redux";
import css from "./App.module.css";

class App extends Component {
  filterArr = (fArr) => {
    let newArr = fArr.filter((cur) =>
      cur.name.toUpperCase().includes(this.props.filter)
    );
    return newArr;
  };

  render() {
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phone<span className={css.title__color}>book</span></h1>
        <ContactForm onSubmitData={this.props.formSubmitHandler} />
        <h2 className={css.subtitle}>Contacts</h2>
        <Filter setFilterToState={this.props.filterSet} />
        <ContactList
          contacts={this.filterArr(this.props.contacts)}
          del={this.props.contactDelete}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: state.app.contacts,
  filter: state.app.filter,
});
const mapDispatchToProrps = (dispatch) => ({
  formSubmitHandler: (contactData) =>
    dispatch(appActions.addContact(contactData)),
  contactDelete: (contactId) => dispatch(appActions.deleteContact(contactId)),
  filterSet: (str) => dispatch(appActions.filterSet(str)),
});
export default connect(mapStateToProps, mapDispatchToProrps)(App);
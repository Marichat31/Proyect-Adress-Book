import { NavLink } from "react-router-dom";
import SearchForm from "./SearchForm.jsx";
import ContactList from "./ContactList.jsx";

export default function Sidebar({ contacts, q }) {
  return (
    <div id="sidebar">
      <h1>React Router Contacts</h1>
      <div>
        <SearchForm q={q} />
        <NavLink to="/contacts/new">
          <button type="button">New</button>
        </NavLink>
      </div>
      <nav>
        <ContactList contacts={contacts} />
      </nav>
    </div>
  );
}

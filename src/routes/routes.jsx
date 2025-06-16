import { createRoutesFromElements, Route, Navigate } from "react-router-dom";
import { Root, Index, Contact, EditContact } from "../pages/pages.jsx";
import ErrorPage from "../error/error-page.jsx";
import NewContact, {
  action as newContactAction,
} from "../actions/contactNewAction.js";
// Loaders
import { contactsLoader, contactLoader } from "../loaders/loaders.js";
// Actions
import {
  createContactAction,
  favoriteAction,
  editContactAction,
} from "../actions/actions.js";
import { action as destroyAction } from "../pages/destroy.jsx";

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Navigate to="/contacts" replace />} />

    <Route
      path="/contacts"
      element={<Root />}
      loader={contactsLoader}
      action={createContactAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path=":contactId"
          element={<Contact />}
          loader={contactLoader}
          action={favoriteAction}
        />
        <Route
          path=":contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editContactAction}
        />
        <Route path=":contactId/destroy" action={destroyAction} />
        {/* Para agregar un nuevo contacto */}
        <Route path="new" element={<NewContact />} action={newContactAction} />
      </Route>
    </Route>
  </>
);

export default routes;

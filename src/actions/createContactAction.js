import { createContact } from "../contacts";
import { redirect } from "react-router-dom";

export async function createContactAction() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
}

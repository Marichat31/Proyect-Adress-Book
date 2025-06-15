import { updateContact } from "../contacts";
import { redirect } from "react-router-dom";

export async function editContactAction({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
}

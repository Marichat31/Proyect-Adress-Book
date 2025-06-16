import { redirect } from "react-router-dom";
import { createContactWithData } from "../contacts";
import NewContact from "../components/NewContact";

export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        const newContact = await createContactWithData(data);
        return redirect(`/contacts/${newContact.id}`);
    } catch (error) {
        return { error: error.message };
    }
}

export default NewContact;

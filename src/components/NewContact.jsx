import { Form, useNavigate, useActionData } from "react-router-dom";

export default function NewContact() {
  const navigate = useNavigate();
  const actionData = useActionData();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Nombre</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          required
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          required
        />
      </p>
      <label>
        <span>Twitter</span>
        <input type="text" name="twitter" placeholder="@jack" required />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
        />
      </label>
      <label>
        <span>Descripción</span>
        <textarea name="notes" rows={6} required />
      </label>
      {actionData?.error && <p style={{ color: "red" }}>{actionData.error}</p>}
      <p>
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate(-1)}>
          Cancelar
        </button>
      </p>
    </Form>
  );
}

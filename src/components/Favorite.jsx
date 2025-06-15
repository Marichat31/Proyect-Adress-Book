import { useFetcher } from "react-router-dom";

export default function Favorite({ contact }) {
  const fetcher = useFetcher();
  const favorite = fetcher.formData
    ? fetcher.formData.get("favorite") === "true"
    : contact.favorite;

  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Eliminar de favoritos" : "Añadir a favoritos"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}

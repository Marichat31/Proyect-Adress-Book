import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>📖 Bienvenido a tu Agenda de Contactos</h1>
        <p style={styles.subtitle}>
          Organiza tus contactos de forma fácil y rápida.
        </p>
        <button style={styles.button} onClick={() => navigate("/contacts")}>
          Ir a la Agenda
        </button>
      </div>
    </>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "3rem",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    color: "#555",
  },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: "#1976d2",
    color: "white",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
  },
};

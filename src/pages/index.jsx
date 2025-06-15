export default function Index() {
  return (
    <section
      id="welcome"
      style={{
        textAlign: "center",
        marginTop: "4rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
      }}
    >
      <h1>¡Bienvenido a Mi Agenda!</h1>
      <hr></hr>
      <p style={{ fontSize: "1.25rem", margin: "1rem 0" }}>
        Organiza tus contactos fácilmente y accede rápido a toda tu información.
      </p>
      <p>
        Aprende más en{" "}
        <a
          href="https://reactrouter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1976d2", textDecoration: "none" }}
        >
          la documentación oficial de React Router
        </a>
        .
      </p>
    </section>
  );
}

import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar.jsx";

export default function Root() {
  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  return (
    <>
      <Sidebar contacts={contacts} q={q} />
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
}

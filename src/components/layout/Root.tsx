import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useNotificationsStore } from "../../store/notifications_store";
import { useEffect } from "react";

export default function Root() {
  const fetchNotifications = useNotificationsStore(
    (state) => state.fetchNotifications
  );

  const notificationsCount = useNotificationsStore(
    (state) => state.notificationsCount
  );

  useEffect(() => {
    if (notificationsCount === 0) {
      fetchNotifications();
    }
  }, [fetchNotifications, notificationsCount]);

  return (
    <>
      <Navbar />
      <main className="w-full flex items-center justify-center">
        <Outlet />
      </main>
    </>
  );
}

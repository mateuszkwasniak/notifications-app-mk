import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useNotificationsStore } from "../../store/notifications_store";
import { useEffect } from "react";
import Loader from "../loader/Loader";

export default function Root() {
  const loading = useNotificationsStore((state) => state.loading);
  const error = useNotificationsStore((state) => state.errorMsg);

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
      {loading && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center opacity-50 bg-slate-200 z-10">
          <div className="mt-20">
            <Loader />
          </div>
        </div>
      )}
      <Navbar />
      <main className="w-full flex items-center justify-center">
        {error ? (
          <p className="text-red-600 mt-10">
            Something went wrong... please try again later.
          </p>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
}

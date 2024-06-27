import { useParams } from "react-router-dom";
import { useNotificationsStore } from "../store/notifications_store";
import { useEffect, useState } from "react";

const pageDetails: { [key: string]: { label: string; txtColor: string } } = {
  request: {
    label: "REQUEST NOTIFICATION",
    txtColor: "text-sky-800",
  },
  feature: {
    label: "NEW FEATURE NOTIFICATION",
    txtColor: "text-green-800",
  },
  status: {
    label: "STATUS CHANGED TO ON HOLD NOTIFICATION",
    txtColor: "text-red-800",
  },
};

export default function NotificationPage() {
  const { id } = useParams();

  const [loading, setIsLoading] = useState<boolean>(true);

  const getSingleNotification = useNotificationsStore(
    (state) => state.getSingleNotification
  );

  const [notification, setNotification] = useState<
    | IRequestNotification
    | IFeatureNotification
    | IStatusHoldNotification
    | undefined
  >(undefined);

  useEffect(() => {
    if (id) {
      const notification = getSingleNotification(Number(id));
      setNotification(notification);
      setIsLoading(false);
    }
  }, [id, getSingleNotification]);

  if (loading) {
    return <h2>Loading...</h2>;
  } else if (!loading && !notification) {
    return <h2>Ooops seems there's no such Notification!</h2>;
  } else if (notification) {
    return (
      <main className="mx-4">
        <h2
          className={`mt-8 mb-4 text-2xl ${
            pageDetails[notification.type].txtColor
          }`}
        >
          {pageDetails[notification.type].label}
        </h2>
        <div className="flex flex-col gap-2">
          {(notification?.type === "status" ||
            notification?.type === "request") && (
            <>
              <h4 className="text-slate-500">FROM: </h4>
              <p>{notification.from}</p>
              <h4 className="text-slate-500">COMPANY: </h4>
              <p>{notification.company}</p>
              <h4 className="text-slate-500">PROJECT: </h4>
              <p>{notification.project}</p>
            </>
          )}
          <h4 className="text-slate-500">DETAILS:</h4>
          {notification?.type === "feature" ? (
            <p>{notification.content}</p>
          ) : notification.type === "request" ? (
            <p>{notification.request}</p>
          ) : (
            <p>Status of the project changed to on hold</p>
          )}
          <h4 className="text-slate-500">CREATED AT: </h4>
          <p>{new Date(notification.created_at).toLocaleDateString()}</p>
        </div>
      </main>
    );
  }
}

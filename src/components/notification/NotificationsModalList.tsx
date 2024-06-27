import { useNotificationsStore } from "../../store/notifications_store";
import NotificationsListItem from "./NotificationsListItem";

export default function NotificationsModalList({
  value,
}: {
  value: "unread" | "all";
}) {
  const notifications = useNotificationsStore((state) => state.notifications);

  const notificationsForDisplay =
    value === "unread"
      ? notifications.filter((notification) => !notification?.read)
      : notifications;

  return (
    <div className="w-full h-[60vh] flex flex-col gap-4 overflow-y-scroll py-8 px-4">
      {notificationsForDisplay?.map((notification) => (
        <NotificationsListItem notification={notification} />
      ))}
    </div>
  );
}

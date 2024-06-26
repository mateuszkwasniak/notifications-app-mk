import { CirclePause, Leaf, MessageSquareText } from "lucide-react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useNotificationsStore } from "../../store/notifications_store";

export default function NotificationsListItem({
  notification,
  small,
}: {
  notification:
    | IFeatureNotification
    | IRequestNotification
    | IStatusHoldNotification;
  small?: boolean;
}) {
  const markNotificationAsRead = useNotificationsStore(
    (state) => state.markNotificationAsRead
  );

  const notifDate = parseISO(notification.created_at);

  let content: React.ReactElement = <></>;

  switch (notification.type) {
    case "feature": {
      content = (
        <div className={`${small ? "text-sm" : "text-base"} text-start`}>
          {notification.content}
        </div>
      );
      break;
    }
    case "request": {
      content = (
        <div className={`${small ? "text-sm" : "text-base"} text-start`}>
          <span className="font-semibold text-slate-800">
            {notification.from}
          </span>{" "}
          from{" "}
          <span className="font-semibold text-slate-800">
            {notification.company}
          </span>{" "}
          has requested {notification.request} for their project{" "}
          <span className="font-semibold text-slate-800">
            {notification.project}.
          </span>
        </div>
      );

      break;
    }
    case "status": {
      content = (
        <div className={`${small ? "text-sm" : "text-base"} text-start`}>
          <span className="font-semibold text-slate-800">
            {notification.from}
          </span>{" "}
          from{" "}
          <span className="font-semibold text-slate-800">
            {notification.company}
          </span>{" "}
          has put their project{" "}
          <span className="font-semibold text-slate-800">
            {notification.project}
          </span>{" "}
          on hold.
        </div>
      );
      break;
    }
  }
  return (
    <Card
      className={`w-full ${
        !small && "hover:opacity-70"
      } transition duration-300 ${
        notification?.read ? "bg-transparent" : "bg-sky-50"
      } ${small || notification?.read ? "" : "cursor-pointer"}`}
    >
      <CardContent className="flex gap-6 p-4">
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-full ${
            notification.type === "request"
              ? "bg-sky-800"
              : notification.type === "feature"
              ? "bg-green-800"
              : "bg-red-800"
          }`}
        >
          {notification.type === "request" ? (
            <MessageSquareText className={`w-5 h-5 text-white font-semibold`} />
          ) : notification.type === "feature" ? (
            <Leaf className={`w-5 h-5 text-white font-semibold`} />
          ) : (
            <CirclePause className={`w-5 h-5 text-white font-semibold`} />
          )}
        </div>
        <div className="max-w-[55%]">{content}</div>
        {!notification?.read && (
          <div
            className="w-4 h-4 ml-auto rounded-full bg-sky-600 hover:scale-125 transition duration-300"
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              e.stopPropagation();
              markNotificationAsRead(notification.id);
            }}
          />
        )}
      </CardContent>
      {!small && (
        <CardFooter className="ml-14">
          <p>{formatDistanceToNow(notifDate, { addSuffix: true })}</p>
        </CardFooter>
      )}
    </Card>
  );
}

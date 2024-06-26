import { useNotificationsStore } from "../../store/notifications_store";
import { Button } from "../ui/button";
import { BookmarkCheck } from "lucide-react";

export default function ButtonMarkAllAsRead() {
  const markAllNotificationsAsRead = useNotificationsStore(
    (state) => state.markAllNotificationsAsRead
  );
  return (
    <Button
      className="bg-transparent text-slate-900 hover:bg-sky-50 text-md"
      onClick={markAllNotificationsAsRead}
    >
      <BookmarkCheck className="mr-2 h-4 w-4" /> Mark all as read
    </Button>
  );
}

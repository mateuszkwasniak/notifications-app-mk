import { useNotificationsStore } from "../../store/notifications_store";
import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import NotificationsListItem from "./NotificationsListItem";

export default function NotificationsHoverList({
  children,
}: {
  children: React.ReactElement;
}) {
  const notifications = useNotificationsStore((state) => state.notifications);

  return (
    <HoverCard openDelay={500} closeDelay={2000}>
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent
        className={`mt-5 pt-2 min-w-[450px] max-h-[85vh] overflow-y-auto flex flex-col gap-4 border-none shadow-none`}
      >
        {notifications.slice(0, 5).map((notification) => (
          <NotificationsListItem notification={notification} small />
        ))}
        <Button className="bg-sky-700">Check all notifications</Button>
      </HoverCardContent>
    </HoverCard>
  );
}

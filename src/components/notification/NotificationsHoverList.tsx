import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import NotificationsListItem from "./NotificationsListItem";

//to be removed!
const notifications: (
  | IFeatureNotification
  | IRequestNotification
  | IStatusHoldNotification
)[] = [
  {
    id: 1,
    type: "request",
    created_at: "2024-06-25T15:29:28.643Z",
    request: "Upgrade",
    from: "Sarah Connor",
    company: "SkyNet",
    project: "AI Development",
  },
  {
    id: 2,
    type: "status",
    created_at: "2024-06-25T15:29:28.643Z",
    from: "EcoPower",
    company: "EcoPower",
    project: "Green Energy",
  },
  {
    id: 3,
    type: "feature",
    created_at: "2024-06-25T15:29:28.643Z",
    content:
      "Introducing Dark Mode for all users to enhance your visual experience.",
  },
  {
    id: 4,
    type: "request",
    created_at: "2024-06-25T15:29:28.643Z",
    request: "Additional resources",
    from: "John Doe",
    company: "StarTech",
    project: "Starship Construction",
  },
  {
    id: 5,
    type: "status",
    created_at: "2024-06-25T15:29:28.643Z",
    from: "SecureIt",
    company: "SecureIt",
    project: "Cybersecurity Enhancement",
  },
  {
    id: 6,
    type: "feature",
    created_at: "2024-06-25T15:29:28.643Z",
    content:
      "New Feature Alert: Real-time collaboration is now available for all projects.",
  },
  {
    id: 7,
    type: "request",
    created_at: "2024-06-25T15:29:28.643Z",
    request: "Budget Increase",
    from: "Jane Smith",
    company: "HealthNet",
    project: "Medical Records System",
  },
  {
    id: 8,
    type: "status",
    created_at: "2024-06-25T15:29:28.643Z",
    from: "SeaGuardians",
    company: "SeaGuardians",
    project: "Ocean Cleanup",
  },
  {
    id: 9,
    type: "feature",
    created_at: "2024-06-25T15:29:28.643Z",
    content:
      "Exciting News: Voice Command integration is now live in your dashboard.",
  },
  {
    id: 10,
    type: "request",
    created_at: "2024-06-25T15:29:28.643Z",
    request: "Timeline Extension",
    from: "Alex Johnson",
    company: "SpaceCorp",
    project: "Satellite Deployment",
  },
];

export default function NotificationsHoverList({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <HoverCard>
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent className="mt-5 pt-2 min-w-[450px] max-h-[85vh] overflow-y-auto flex flex-col gap-4 border-none shadow-none">
        {notifications.slice(0, 8).map((notification) => (
          <NotificationsListItem notification={notification} small />
        ))}
        <Button className="bg-sky-700">Check all notifications</Button>
      </HoverCardContent>
    </HoverCard>
  );
}

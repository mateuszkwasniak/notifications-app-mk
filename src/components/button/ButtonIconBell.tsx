import { useNotificationsStore } from "../../store/notifications_store";
import { Button } from "../ui/button";
import { BellRing } from "lucide-react";

export default function ButtonIconBell() {
  const unreadNotificationsCount = useNotificationsStore(
    (state) => state.unreadNotificationsCount
  );
  return (
    <Button
      variant="outline"
      size="icon"
      className="relative rounded-full border-none hover:bg-sky-50"
    >
      <BellRing className="h-5 w-5 text-slate-800" />
      {unreadNotificationsCount > 0 && (
        <div className="absolute -right-1 -top-1 w-[18px] h-[18px] p-1 flex items-center justify-center bg-red-600 z-10 rounded-full animate-bounce">
          <p className="text-[10px] font-bold text-white ">
            {unreadNotificationsCount}
          </p>
        </div>
      )}
    </Button>
  );
}

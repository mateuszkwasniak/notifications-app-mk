import { Button } from "../ui/button";
import { BellRing } from "lucide-react";

export default function ButtonIconBell() {
  const MOCKED_NOTIF_COUNT: number = 12;

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative rounded-full border-none hover:bg-sky-50"
    >
      <BellRing className="h-5 w-5 text-slate-800" />
      <div className="absolute -right-1 -top-1 w-4 h-4 p-1 flex items-center justify-center bg-red-600 z-10 rounded-full ">
        <p className="text-[10px] font-bold text-white">{MOCKED_NOTIF_COUNT}</p>
      </div>
    </Button>
  );
}

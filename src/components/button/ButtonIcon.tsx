import { Button } from "../../components/ui/button";
import { BellRing } from "lucide-react";

export default function ButtonIcon() {
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full border-none hover:bg-sky-50"
    >
      <BellRing className="h-4 w-4 text-slate-800" />
    </Button>
  );
}

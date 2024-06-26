import ButtonIcon from "../button/ButtonIconBell";
import ButtonMarkAllAsRead from "../button/ButtonMarkAllAsRead";
import NotificationsList from "../notification/NotificationsList";
import { notificationModalTabs } from "../../lib/notifications";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function NotificationsModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <ButtonIcon />
      </DialogTrigger>
      <DialogContent className="max-w-[700px] w-full max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center w-fit mb-4 text-2xl">
            Notifications
            <div className="w-fit self-start ml-2 px-2 py-0.5 inline-flex items-center justify-center rounded-full bg-red-600 text-xs text-bold text-white">
              3 NEW
            </div>
          </DialogTitle>
        </DialogHeader>
        <Tabs defaultValue={notificationModalTabs[0].value} className="w-full">
          <div className="w-full flex pb-8 border-b border-b-slate-200">
            <TabsList className="grid w-[60%] h-fit mr-2 grid-cols-2 bg-sky-50">
              {notificationModalTabs.map(({ label, value }) => (
                <TabsTrigger value={value} className="text-md">
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
            <ButtonMarkAllAsRead />
          </div>
          {notificationModalTabs.map(({ value }) => (
            <TabsContent value={value} className="mt-0">
              <NotificationsList value={value} />
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

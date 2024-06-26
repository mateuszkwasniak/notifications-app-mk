import NotificationsModal from "../modal/NotificationsModal";

export default function Navbar() {
  return (
    <div className="w-full p-4 flex items-center justify-center border-b shadow-sm shadow-slate-200">
      <div className="w-full lg:max-w-[800px] flex items-center justify-between">
        <div>
          <p className="font-['Roboto_Condensed'] text-4xl font-semibold text-slate-800">
            Notifications
          </p>
        </div>
        <nav>
          <NotificationsModal />
        </nav>
      </div>
    </div>
  );
}

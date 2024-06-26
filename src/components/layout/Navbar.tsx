import ButtonIconBell from "../button/ButtonIconBell";
import NotificationsModal from "../modal/NotificationsModal.tsx";
import NotificationsHoverList from "../notification/NotificationsHoverList";

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
          <NotificationsModal>
            <NotificationsHoverList>
              <ButtonIconBell />
            </NotificationsHoverList>
          </NotificationsModal>
        </nav>
      </div>
    </div>
  );
}

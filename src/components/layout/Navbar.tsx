import ButtonIcon from "../button/ButtonIcon";

export default function Navbar() {
  return (
    <div className="w-full p-4 flex items-center justify-center border-b shadow-sm shadow-slate-200">
      <div className="w-full lg:max-w-[800px] flex items-center justify-between">
        <div>
          <p className="font-['Roboto_Condensed'] text-2xl font-semibold text-slate-800">
            Notifications
          </p>
        </div>
        <nav>
          <ButtonIcon />
        </nav>
      </div>
    </div>
  );
}

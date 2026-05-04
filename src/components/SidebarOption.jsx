export function SidebarOption({ icon, text }) {
  return (
    <div className="rounded-xl flex w-66 py-2 items-center hover:bg-[#e4dff2] transition-all duration-150 hover:font-semibold px-5 text-lg justify-between">
      <p>{text}</p>
      <div>{icon}</div>
    </div>
  );
}

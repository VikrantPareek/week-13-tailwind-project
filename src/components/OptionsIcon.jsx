export function OptionIcon({icon, text}) {
  return (
    <div className="w-fit">
      <div className="mx-auto bg-[#7bdfcb] w-fit px-3 py-3 rounded-lg">
        {icon}
      </div>
      <p className="font-semibold mt-1">{text}</p>
    </div>
  );
}

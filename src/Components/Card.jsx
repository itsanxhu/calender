import { EllipsisVertical } from "lucide-react";

const Card = () => {
  return (
    <div>
      <div className="h-[5rem] w-[22rem] bg-stone-100 rounded-3xl border-2 border-neutral-400/30 px-5 py-5 flex justify-between active:scale-95 transition-transform duration-200 shadow-lg">
        <div className="flex justify-center items-center gap-4">
          <div className="w-10">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/1280px-Apple_TV_Plus_Logo.svg.png"
              alt=""
            />
          </div>
          <div>
            <p className="text-sm font-bold tracking-tight">Apple TV+</p>
            <p className="text-xs text-neutral-400 tracking-tight">
              15 Feb, 2024
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="font-semibold tracking-tight text-[14px]">6,99 EUR</p>
          <EllipsisVertical size={18} />
        </div>
      </div>
    </div>
  );
};

export default Card;

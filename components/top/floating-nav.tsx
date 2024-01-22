import LogoIcon from "@/public/assets/icons/clearbit-logo.svg";
import { menus } from "@/constants";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-2 big:py-4 border border-[#D0D5DD] rounded-[100px] flex-grow mb-32 big:mb-40 bg-[#F2F4F7]">
      <div className="flex gap-x-[0.625rem] items-center">
        <LogoIcon />
        <p className="big:text-[1.5rem] text-[1.3rem] font-semibold text-[#101828]">ClearLink</p>
      </div>
      <div className="flex gap-x-10">
        {menus.map((menu, index) => (
          <div key={index} className="flex gap-x-[6px] items-center">
            <p className="text-[#667085] font-semibold text-base big:text-lg">{menu.label}</p>
            {menu.icon()}
          </div>
        ))}
      </div>
      <div className="flex gap-x-2">
        <Button
          size="icon"
          className="px-6 py-4 w-[144px] font-semibold h-[52px] text-center hover:bg-black hover:text-white text-[#101828] border-[#98A2B3] border bg-white rounded-[100px] box-shadow-0px-1px-2px-0px-rgba-16-24-40-0-05"
        >
          Talk to sales
        </Button>
        <Button
          size="icon"
          className="px-6 py-4 w-[167px] h-[52px] font-semibold hover:bg-blue-400 bg-[#175CD3] rounded-[100px] box-shadow-0px-1px-2px-0px-rgba-16-24-40-0-05"
        >
          Sign up for free
        </Button>
      </div>
    </div>
  );
};

export default Navbar;

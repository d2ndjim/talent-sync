import { Button } from "../ui/button";
import CheckIcon from "@/public/assets/icons/check.svg";
import MockupIcon from "@/public/assets/icons/mockup.svg";
const Communication = () => {
  return (
    <div className="pl-[90px] py-16">
      <div className="big:flex big:justify-center">
        <div className="big:w-[1408px] big:h-[697px] flex justify-between big:gap-x-60px">
          <div>
            <h1 className="big:text-[48px] w-[500px] big:w-[579px] mb-8 text-4xl font-semibold big:leading-[60px] big:tracking-[-0.96px]">
              Ready to clear the path to perfect communication?
            </h1>
            <div className="flex gap-x-3 items-center mb-5">
              <CheckIcon />
              <p>30 days free trial</p>
            </div>
            <div className="flex gap-x-3 items-center mb-5">
              <CheckIcon />
              <p>Cancel at any time</p>
            </div>
            <div className="flex gap-x-3 items-center mb-5">
              <CheckIcon />
              <p>Access to all features</p>
            </div>
            <div className="flex gap-x-3 items-center mb-10">
              <CheckIcon />
              <p>Peronalized onboarding</p>
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
                className="px-6 py-4 w-[195px] h-[52px] font-semibold hover:bg-blue-400 bg-[#175CD3] rounded-[100px] box-shadow-0px-1px-2px-0px-rgba-16-24-40-0-05"
              >
                Start your free trial
              </Button>
            </div>
          </div>
          <MockupIcon className="big:w-[872px] big:h-[609px]" />
        </div>
      </div>
    </div>
  );
};

export default Communication;

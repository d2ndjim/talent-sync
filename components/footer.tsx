import LogoIcon from "@/public/assets/icons/clearbit-logo.svg";
import AppleIcon from "@/public/assets/icons/apple-badge.svg";
import GoogleIcon from "@/public/assets/icons/google-badge.svg";

const Footer = () => {
  return (
    <div className="big:pt-24 pt-16 big:px-[128px] px-[90px] big:flex big:justify-center">
      <div className="big:w-[1403px] big:h-[244px] flex gap-x-12 big:gap-x-[100px] big:mb-12 mb-8">
        <div className="flex flex-col gap-y-8">
          <div className="flex gap-x-[10px]">
            <LogoIcon className="w-[26px] h-[28px]" />
            <h4 className="big:text-2xl font-semibold text-[#101828]">
              ClearLink.
            </h4>
          </div>
          <p className="text-[#475467] w-[330px] text-[15px] big:w-[400px] big:h-[84px] big:text-[18px] leading-7">
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
        <div className="flex gap-x-6 big:gap-x-8">
          <div className="flex flex-col gap-y-4 w-[120px] big:w-[160px]">
            <p className="text-[#667085] text-sm big:text-base font-semibold">
              Product
            </p>
            <p className="text-[#475467] text-base big:text-[18px] font-semibold big:leading-7">
              Overview
            </p>
            <p className="text-[#475467] text-base big:text-[18px] font-semibold big:leading-7">
              Features
            </p>
            <p className="text-[#475467] text-base big:text-[18px] font-semibold big:leading-7">
              Solutions
            </p>
            <p className="text-[#475467] text-base big:text-[18px] font-semibold big:leading-7">
              Tutorials
            </p>
            <p className="text-[#475467] text-base big:text-[18px] font-semibold big:leading-7">
              Pricing
            </p>
          </div>
          <div className="flex flex-col gap-y-4 w-[120px] big:w-[160px]">
            <p className="text-[#667085] text-sm big:text-base font-semibold">
              Company
            </p>
            <p className="text-[#475467] text-base big:text-[18px] font-semibold big:leading-7">
              About us
            </p>
            <p className="text-[#475467] text-base big:text-[18px] font-semibold big:leading-7">
              Careers
            </p>
            <p className="text-[#475467] text-base big:text-[18px] font-semibold big:leading-7">
              Press
            </p>
            <p className="text-[#475467] text-base big:text-[18px] font-semibold big:leading-7">
              News
            </p>
            <p className="text-[#475467] text-base big:text-[18px] font-semibold big:leading-7">
              Contact
            </p>
          </div>
          <div className="flex flex-col gap-y-4 w-[120px] big:w-[160px]">
            <p className="text-[#667085] text-sm big:text-base font-semibold">
              Resources
            </p>
            <p className="text-[#475467] text-base big:text-[18px] font-semibold big:leading-7">
              Blog
            </p>
            <p className="text-[#475467] text-base big:text-[18px] font-semibold big:leading-7">
              Events
            </p>
            <p className="text-[#475467] text-base big:text-[18px] font-semibold big:leading-7">
              Help center
            </p>
            <p className="text-[#475467] text-base big:text-[18px] font-semibold big:leading-7">
              Tutorials
            </p>
            <p className="text-[#475467] text-base big:text-[18px] font-semibold big:leading-7">
              Support
            </p>
          </div>
          <div className="flex flex-col gap-y-4 w-[120px] big:w-[160px]">
            <p className="text-[#667085] text-sm big:text-base font-semibold">
              Legal
            </p>
            <p className="text-[#475467] text-base big:text-[18px] font-semibold big:leading-7">
              Terms
            </p>
            <p className="text-[#475467] text-base big:text-[18px] font-semibold big:leading-7">
              Privacy
            </p>
            <p className="text-[#475467] text-base big:text-[18px] font-semibold big:leading-7">
              Cookies
            </p>
            <p className="text-[#475467] text-base big:text-[18px] font-semibold big:leading-7">
              Licenses
            </p>
            <p className="text-[#475467] text-base big:text-[18px] font-semibold big:leading-7">
              Contact
            </p>
          </div>
          <div className="flex flex-col gap-y-4 w-[100px] big:w-[135px]">
            <p className="text-[#004EEB] text-base font-semibold">
              Get the app
            </p>
            <AppleIcon />
            <GoogleIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

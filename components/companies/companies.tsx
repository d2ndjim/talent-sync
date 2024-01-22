import ShopifyIcon from "@/public/assets/icons/shopify.svg";
import CoinbaseIcon from "@/public/assets/icons/coinbase.svg";
import DropboxIcon from "@/public/assets/icons/dropbox.svg";
import IntercomIcon from "@/public/assets/icons/intercom.svg";
import AutomaticIcon from "@/public/assets/icons/automatic.svg";
import MarvelIcon from "@/public/assets/icons/marvel.svg";

const Companies = () => {
  return (
    <div className="big:py-24 py-16 big:flex big:justify-center big:px-[160px]">
      <div className="px-8">
        <p className="text-[20px] font-medium leading-[30px] text-[#475467] mb-12 text-center">
          Join 1,500+ companies already video conferencing the ClearLink way
        </p>
        <div className="flex items-center justify-center gap-x-[57px]">
          <ShopifyIcon className="w-[130px] big:w-[152px] h-[43px]" />
          <CoinbaseIcon className="w-[130px] big:w-[179px]" />
          <DropboxIcon className="w-[130px] big:w-[184px]" />
          <IntercomIcon className="w-[130px] big:w-[175px]" />
          <MarvelIcon className="w-[130px] big:w-[101px]" />
          <AutomaticIcon className="w-[130px] big:w-[241px]" />
        </div>
      </div>
    </div>
  );
};

export default Companies;

import ShopifyIcon from "@/public/assets/icons/shopify.svg";
import CoinbaseIcon from "@/public/assets/icons/coinbase.svg";
import DropboxIcon from "@/public/assets/icons/dropbox.svg";
import IntercomIcon from "@/public/assets/icons/intercom.svg";
import AutomaticIcon from "@/public/assets/icons/automatic.svg";
import MarvelIcon from "@/public/assets/icons/marvel.svg";

const Companies = () => {
  return (
    <div className="my-24 flex justify-center">
      <div className="px-8">
        <p className="text-[20px] font-medium leading-[30px] text-[#475467] mb-12 text-center">
          Join 1,500+ companies already video conferencing the ClearLink way
        </p>
        <div className="flex items-center gap-x-[69px]">
          <ShopifyIcon />
          <CoinbaseIcon />
          <DropboxIcon />
          <IntercomIcon />
          <MarvelIcon />
          <AutomaticIcon />
        </div>
      </div>
    </div>
  );
};

export default Companies;

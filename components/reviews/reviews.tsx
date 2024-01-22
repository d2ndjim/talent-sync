import ShopifyIcon from "@/public/assets/icons/shopify.svg";
import StarIcon from "@/public/assets/icons/stars.svg";
import AvatarIcon from "@/public/assets/icons/avatar.svg";
import RightArrowIcon from "@/public/assets/icons/arrow-right.svg";
import LeftArrowIcon from "@/public/assets/icons/arrow-left.svg";
import ReviewImage1Icon from "@/public/assets/icons/review-img-1.svg";
import ReviewImage2Icon from "@/public/assets/icons/review-img-2.svg";
import ReviewImage3Icon from "@/public/assets/icons/review-img-3.svg";
import ReviewImage4Icon from "@/public/assets/icons/review-img-4.svg";
import ReviewImage5Icon from "@/public/assets/icons/review-img-5.svg";

const Reviews = () => {
  return (
    <div className="big:py-24 py-16 big:px-[128px] px-[90px] bg-[#F9FAFB]">
      <div className="big:flex big:justify-center">
        <div className="big:w-[1408px] big:h-[556px] px-8 flex gap-x-[40px] big:gap-x-[64px]">
          <div>
            <ShopifyIcon className="w-[112.787px] h-[32px] mb-8 big:mb-12" />
            <StarIcon className="big:mb-12 mb-8" />
            <h3 className="big:text-[44px] text-3xl w-[450px]  text-[#101828] font-medium big:leading-[60px] big:tracking-[-0.88px] big:w-[640px] mb-12">
              ClearLink has upgraded our remote meetings. High-quality video,
              screen sharing, and <br /> top-notch security make it essential
              for our team.
            </h3>
            <div className="flex gap-x-3">
              <AvatarIcon />
              <div className="flex flex-col gap-[2px] w-[330px] big:w-[412px]">
                <p className="text-[#101828] big:text-[20px] font-semibold big:leading-[30px]">
                  Sarah Thompson
                </p>
                <p className="text-[#475467] text-sm big:text-[18px] font-normal big:leading-7">
                  Project Manager, Shopify
                </p>
              </div>
              <div className="flex gap-x-5 big:gap-x-8">
                <LeftArrowIcon className="h-[48px] w-[48px] big:w-[56px] big:h-[56px]" />
                <RightArrowIcon className="h-[48px] w-[48px] big:w-[56px] big:h-[56px]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 w-[550px] big:w-[640px]">
            <div className="flex gap-x-4 justify-center">
              <ReviewImage1Icon className="big:mt-[80px] mt-[70px] w-[130px] h-[140px] big:w-[160px] big:h-[160px]" />
              <ReviewImage2Icon className="w-[130px] h-[210px] big:w-[160px] big:h-[240px]" />
            </div>
            <div className="flex gap-x-4">
              <ReviewImage3Icon className="w-[182px] h-[118px] big:w-[192px] big:h-[128px]" />
              <ReviewImage4Icon className="w-[130px] h-[200px] big:w-[160px] big:h-[240px]" />
              <ReviewImage5Icon className="w-[164px] h-[100px] big:w-[192px] big:h-[128px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

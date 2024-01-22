import { Fragment } from "react";
import { cardIcons, cardImages } from "@/constants";
import { Button } from "../ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AssistantIcon from "@/public/assets/icons/assistant.svg";
import AvatarGroupIcon from "@/public/assets/icons/avatar-group.svg";
import ReviewIcon from "@/public/assets/icons/review-stars.svg";

const Intro = () => {
  return (
    <div className="big:flex big:justify-center">
      <div className="flex justify-between items-center big:w-[1408px]">
        <div className="h-[472px]">
          <h1 className="text-[#1D2939] h-[144px] font-semibold big:leading-[72px] tracking-[-1.28px] text-[50px] big:text-[64px] mb-6">
            Uniting the world, <br />
            one video call at a time
          </h1>
          <p className="big:text-2xl text-[22px] w-[500px] big:leading-[32px] text-[#667085] big:w-[662px] h-[96px]">
            Experience the future of communication with ClearLink – where
            crystal-clear video conferencing meets unparalleled simplicity.
          </p>
          <div className="flex gap-x-5 items-center my-10 big:my-12">
            <Button className="w-[221px] h-[60px] hover:bg-blue-400 bg-[#175CD3] text-[18px] leading-[28px] font-semibold px-[28px] py-4 rounded-[100px] box-shadow-0px-1px-2px-0px-rgba-16-24-40-0-05">
              Start your free trial
            </Button>
            <div className="flex items-center gap-x-3">
              <AssistantIcon />
              <p className="text-[18px] leading-[28px] font-semibold text-[#175CD3]">
                Discover AI assistant
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 items-center">
            <AvatarGroupIcon />
            <div className="flex flex-col">
              <ReviewIcon />
              <p className="text-[#475467] font-medium text-base">
                from 3,000+ reviews
              </p>
            </div>
          </div>
        </div>
        <>
          <Card className="big:w-[584px] big:h-[488px] h-[450px] w-[500px]">
            <CardContent>
              <div className="grid grid-cols-3 gap-8 big:gap-10 big:mb-7 mb-10">
                {cardImages.map((image, index) => (
                  <Fragment key={index}>
                    {image.icon()}
                  </Fragment>
                  // <Image key={index} src={image} alt="card-image" priority />
                ))}
              </div>
              <div className="flex items-center justify-center gap-x-4">
                {cardIcons.map((icon, index) => (
                  <div
                    className=" p-3 rounded-[100px] bg-white flex items-center justify-center"
                    key={index}
                  >
                    {icon.icon()}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      </div>
    </div>
  );
};

export default Intro;

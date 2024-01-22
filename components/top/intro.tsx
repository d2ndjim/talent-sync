import { Fragment } from "react";
import { cardIcons, cardImages } from "@/constants";
import { Button } from "../ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AssistantIcon from "@/public/assets/icons/assistant.svg";
import AvatarGroupIcon from "@/public/assets/icons/avatar-group.svg";
import ReviewIcon from "@/public/assets/icons/review-stars.svg";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between items-center px-[15px] w-[1408px]">
        <div className="h-[472px]">
          <h1 className="text-[#1D2939] h-[144px] font-semibold leading-[72px] tracking-[-1.28px] text-[56px] 2xl:text-[64px] mb-6">
            Uniting the world, <br />
            one video call at a time
          </h1>
          <p className="2xl:text-2xl text-[22px] leading-[32px] text-[#667085] w-[600px] 2xl:w-[662px] h-[96px]">
            Experience the future of communication with ClearLink – where
            crystal-clear video conferencing meets unparalleled simplicity.
          </p>
          <div className="flex gap-x-5 items-center my-12">
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
          <Card className="w-[584px] h-[488px]">
            <CardContent>
              <div className="grid grid-cols-3 gap-10 place-items-center mb-8">
                {cardImages.map((image, index) => (
                  <div key={index} className="rounded-xl">
                    {image.icon()}
                  </div>
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

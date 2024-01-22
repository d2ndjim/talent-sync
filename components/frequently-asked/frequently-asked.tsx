"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useAccordion } from "@/hooks/use-accordion";

const FrequentlyAsked = () => {
  const {
    item1Open,
    item2Open,
    item3Open,
    item4Open,
    item5Open,
    onItem1Open,
    onItem2Open,
    onItem3Open,
    onItem4Open,
    onItem5Open,
  } = useAccordion();
  return (
    <div className="big:py-24 big:pb-0 py-16 big:px-[128px] px-[90px]">
      <div className="big:flex big:justify-center">
        <div className="big:w-[1408px] big:h-[720px] flex justify-between">
          <div className="big:w-[547px] w-[400px] big:h-[96px]">
            <p className="text-[#175CD3] big:text-[18px] text-sm font-semibold big:leading-7 mb-3">
              Support
            </p>
            <h3 className="text-[#1D2939] big:text-[48px] text-4xl font-semibold big:leading-[60px] big:tracking-[-0.96px] mb-5">
              FAQs
            </h3>
            <p className="big:text-[24px] text-base big:leading-8 text-[#667085]">
              Everything you need to know about the product and billing. Can’t
              find the answer you’re looking for? Please{" "}
              <span className="underline">chat to our friendly team.</span>
            </p>
          </div>
          <div className="big:w-[765px] w-[600px]">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className={cn(
                  "",
                  item1Open &&
                    " bg-[#F9FAFB] my-2  border border-[#EAECF0] rounded-[16px]",
                )}
              >
                <AccordionTrigger onClick={onItem1Open}>
                  How many participants can join a ClearLink video conference?
                </AccordionTrigger>
                <AccordionContent>
                  ClearLink offers flexible meeting options. Depending on your
                  subscription plan, you can host meetings with varying numbers
                  of participants. Our plans are designed to accommodate small
                  team collaborations and large-scale webinars, ensuring you
                  have the right fit for your needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className={cn(
                  "",
                  item2Open &&
                    " bg-[#F9FAFB] my-2 border border-[#EAECF0] rounded-[16px]",
                )}
              >
                <AccordionTrigger onClick={onItem2Open}>
                  Can I use ClearLink on multiple devices?
                </AccordionTrigger>
                <AccordionContent>
                  ClearLink offers flexible meeting options. Depending on your
                  subscription plan, you can host meetings with varying numbers
                  of participants. Our plans are designed to accommodate small
                  team collaborations and large-scale webinars, ensuring you
                  have the right fit for your needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className={cn(
                  "",
                  item3Open &&
                    " bg-[#F9FAFB] my-2  border border-[#EAECF0] rounded-[16px]",
                )}
              >
                <AccordionTrigger onClick={onItem3Open}>
                  How does ClearLink ensure the security of my video
                  conferences?
                </AccordionTrigger>
                <AccordionContent>
                  ClearLink offers flexible meeting options. Depending on your
                  subscription plan, you can host meetings with varying numbers
                  of participants. Our plans are designed to accommodate small
                  team collaborations and large-scale webinars, ensuring you
                  have the right fit for your needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className={cn(
                  "",
                  item4Open &&
                    " bg-[#F9FAFB] my-2 border border-[#EAECF0] rounded-[16px]",
                )}
              >
                <AccordionTrigger onClick={onItem4Open}>
                  Do I need to download any software to use ClearLink?
                </AccordionTrigger>
                <AccordionContent>
                  ClearLink offers flexible meeting options. Depending on your
                  subscription plan, you can host meetings with varying numbers
                  of participants. Our plans are designed to accommodate small
                  team collaborations and large-scale webinars, ensuring you
                  have the right fit for your needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className={cn(
                  "",
                  item5Open &&
                    " bg-[#F9FAFB] my-2 border border-[#EAECF0] rounded-[16px]",
                )}
              >
                <AccordionTrigger onClick={onItem5Open}>
                  What kind of customer support does ClearLink provide?
                </AccordionTrigger>
                <AccordionContent>
                  ClearLink offers flexible meeting options. Depending on your
                  subscription plan, you can host meetings with varying numbers
                  of participants. Our plans are designed to accommodate small
                  team collaborations and large-scale webinars, ensuring you
                  have the right fit for your needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsked;

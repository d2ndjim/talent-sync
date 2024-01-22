import VideoIcon from "@/public/assets/icons/video-recorder.svg";
import RecordIcon from "@/public/assets/icons/recording.svg";
import CalendarIcon from "@/public/assets/icons/calendar.svg";
import LockIcon from "@/public/assets/icons/lock-unlocked.svg";
import HandDrawnArrowIcon from "@/public/assets/icons/hand-drawn-arrow.svg";
import GroupIcon from "@/public/assets/icons/group-people.svg";

const Advantage = () => {
  return (
    <div className="big:py-24 py-16 big:px-[128px] px-[90px]">
      <div className="big:flex big:justify-center">
        <div className="big:w-[1408px]">
          <div className="big:mb-20 mb-16 big:px-[37px]">
            <p className="text-[#175CD3] text-[18px] font-semibold leading-7 mb-1">
              The ClearLink Advantage
            </p>
            <h2 className="big:text-5xl text-4xl text-[#1D2939] leading-[60px] tracking-[-0.96px] font-semibold mb-5">
              Why choose ClearLink?
            </h2>
            <p className="big:text-2xl text-xl leading-8 text-[#667085] w-[842px]">
              In a world where connection is everything, ClearLink takes the
              lead. Our <br />
              cutting-edge video conferencing app offers:
            </p>
          </div>
          <div className="big:w-[1408px] big:justify-center flex gap-x-10">
            <div className="big:mt-2 grid grid-cols-2 gap-x-7 gap-y-[40px] big:gap-x-10 big:gap-y-[60px] big:w-[800px]">
              <div>
                <div className="w-[56px] h-[56px] p-4 flex items-center justify-center rounded-[100px] bg-[#F9FAFB] border border-[#EAECF0] mb-5">
                  <VideoIcon />
                </div>
                <h3 className="text-[#101828] text-xl big:text-2xl font-semibold mb-2">
                  Crystal-clear HD video
                </h3>
                <p className="big:text-[18px] text-[13px] leading-[19px] big:leading-7 text-[#475467] big:w-[360px]">
                  No more pixelation or blurriness – just stunning, lifelike
                  clarity that brings your team closer in meetings.
                </p>
              </div>
              <div>
                <div className="w-[56px] h-[56px] p-4 flex items-center justify-center rounded-[100px] bg-[#F9FAFB] border border-[#EAECF0] mb-5">
                  <RecordIcon />
                </div>
                <h3 className="text-[#101828] text-xl big:text-2xl font-semibold mb-2">
                  Noise-canceling audio
                </h3>
                <p className="big:text-[18px] text-[13px] leading-[19px] big:leading-7 text-[#475467] big:w-[360px]">
                  Say goodbye to distractions with our advanced audio tech for
                  crisp, interruption-free conversations.
                </p>
              </div>
              <div>
                <div className="w-[56px] h-[56px] p-4 flex items-center justify-center rounded-[100px] bg-[#F9FAFB] border border-[#EAECF0] mb-5">
                  <CalendarIcon />
                </div>
                <h3 className="text-[#101828] text-xl big:text-2xl font-semibold mb-2">
                  Scheduling made easy
                </h3>
                <p className="big:text-[18px] text-[13px] leading-[19px] big:leading-7 text-[#475467] big:w-[360px]">
                  Streamline your agenda with ClearLink&apos;s intuitive
                  scheduling. Set up meetings, send invitations, and receive
                  reminders in one place.
                </p>
              </div>
              <div>
                <div className="w-[56px] h-[56px] p-4 flex items-center justify-center rounded-[100px] bg-[#F9FAFB] border border-[#EAECF0] mb-5">
                  <LockIcon />
                </div>
                <h3 className="text-[#101828] text-xl big:text-2xl font-semibold mb-2">
                  Bank-grade security
                </h3>
                <p className="big:text-[18px] text-[13px] leading-[19px] big:leading-7 text-[#475467] big:w-[360px]">
                  Your privacy is our priority with bank-grade security
                  protocols safeguarding your meetings and data from unwanted
                  intruders.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="flex flex-col">
                <span className="absolute big:top-[-100px] top-[-85px] big:right-52 right-28 transform -translate-y-1/2">
                  <HandDrawnArrowIcon className="w-[283px] big:h-[244px] h-[200px]" />
                </span>
                <GroupIcon className="big:w-[544px] w-[400px] big:h-[527px] h-[383px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;

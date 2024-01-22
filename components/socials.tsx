import LinkedInIcon from "@/public/assets/icons/linkedin.svg";
import TwitterIcon from "@/public/assets/icons/twitter.svg";
import FacebookIcon from "@/public/assets/icons/facebook.svg";
import InstagramIcon from "@/public/assets/icons/instagram.svg";
import GithubIcon from "@/public/assets/icons/github.svg";
import YoutubeIcon from "@/public/assets/icons/youtube.svg";

const Socials = () => {
  return (
    <div className="big:px-[128px] px-[90px] big:py-12 py-8 bg-[#F9FAFB] ">
      <div className="big:flex big:justify-center">
        <div className="big:w-[1408px] big:h-[24px] flex gap-x-8 ">
          <p className="text-[#667085] text-sm big:text-base big:w-[1112px] w-[1000px]">
            © 2023 ClearLink. All rights reserved.
          </p>
          <div className="flex gap-x-6">
            <LinkedInIcon />
            <a
              href="https://twitter.com/d2ndjim_/status/1749553447492362475"
              target="_blank"
            >
              <TwitterIcon />
            </a>
            <FacebookIcon />
            <InstagramIcon />
            <a href="https://github.com/d2ndjim/talent-sync" target="_blank">
              <GithubIcon />
            </a>
            <YoutubeIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;

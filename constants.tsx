import DropdownIcon from "@/public/assets/icons/chevron-down.svg";
import MicrophoneIcon from "@/public/assets/icons/microphone.svg";
import MonitorIcon from "@/public/assets/icons/monitor.svg";
import SmileyIcon from "@/public/assets/icons/face-smile.svg";
import SettingIcon from "@/public/assets/icons/settings.svg";
import VideoIcon from "@/public/assets/icons/video-recorder.svg";
import MessageIcon from "@/public/assets/icons/message-text-circle.svg";
import cardImage1 from "@/public/assets/images/card-img-1.png";
import cardImage2 from "@/public/assets/images/card-img-2.png";
import cardImage3 from "@/public/assets/images/card-img-3.png";
import cardImage4 from "@/public/assets/images/card-img-4.png";
import cardImage5 from "@/public/assets/images/card-img-5.png";
import cardImage6 from "@/public/assets/images/card-img-6.png";


export const menus = [
  {
    label: "Products",
    icon: () => <DropdownIcon />,
  },
  {
    label: "Solutions",
    icon: () => <DropdownIcon />,
  },
  {
    label: "Resources",
    icon: () => <DropdownIcon />,
  },
  {
    label: "Pricing",
    icon: () => null,
  },
];

export const cardIcons = [
  {
    icon: () => <MicrophoneIcon />,
  },
  {
    icon: () => <VideoIcon />,
  },
  {
    icon: () => <MonitorIcon />,
  },
  {
    icon: () => <SmileyIcon />,
  },
  {
    icon: () => <MessageIcon />,
  },
  {
    icon: () => <SettingIcon />,
  },
];


export const cardImages = [
  cardImage1,
  cardImage2,
  cardImage3,
  cardImage4,
  cardImage5,
  cardImage6,
];

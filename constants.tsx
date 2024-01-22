import DropdownIcon from "@/public/assets/icons/chevron-down.svg";
import MicrophoneIcon from "@/public/assets/icons/microphone.svg";
import MonitorIcon from "@/public/assets/icons/monitor.svg";
import SmileyIcon from "@/public/assets/icons/face-smile.svg";
import SettingIcon from "@/public/assets/icons/settings.svg";
import VideoIcon from "@/public/assets/icons/video-recorder.svg";
import MessageIcon from "@/public/assets/icons/message-text-circle.svg";
import Card1Icon from "@/public/assets/icons/card-img-1.svg";
import Card2Icon from "@/public/assets/icons/card-img-2.svg";
import Card3Icon from "@/public/assets/icons/card-img-3.svg";
import Card4Icon from "@/public/assets/icons/card-img-4.svg";
import Card5Icon from "@/public/assets/icons/card-img-5.svg";
import Card6Icon from "@/public/assets/icons/card-img-6.svg";
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
  {
    icon: () => <Card1Icon />,
  },
  {
    icon: () => <Card2Icon />,
  },
  {
    icon: () => <Card3Icon />,
  },
  {
    icon: () => <Card4Icon />,
  },
  {
    icon: () => <Card5Icon />,
  },
  {
    icon: () => <Card6Icon />,
  },
];

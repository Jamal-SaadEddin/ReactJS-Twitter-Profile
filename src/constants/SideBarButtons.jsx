import {
  BsBell,
  BsBookmark,
  BsHouseDoor,
  BsPeople,
  BsPerson,
  BsSearch,
} from "react-icons/bs";
import { CiCircleMore, CiMail, CiViewList } from "react-icons/ci";

const LOGO_FONT_SIZE = 24;

const sideBarButtons = [
  {
    title: "Home",
    logo: <BsHouseDoor fontSize={LOGO_FONT_SIZE} />,
  },
  {
    title: "Explore",
    logo: <BsSearch fontSize={LOGO_FONT_SIZE} />,
  },
  {
    title: "Notifications",
    logo: <BsBell fontSize={LOGO_FONT_SIZE} />,
  },
  {
    title: "Messages",
    logo: <CiMail fontSize={LOGO_FONT_SIZE} />,
  },
  {
    title: "Lists",
    logo: <CiViewList fontSize={LOGO_FONT_SIZE} />,
  },
  {
    title: "Bookmarks",
    logo: <BsBookmark fontSize={LOGO_FONT_SIZE} />,
  },
  {
    title: "Communities",
    logo: <BsPeople fontSize={LOGO_FONT_SIZE} />,
  },
  {
    title: "Profile",
    logo: <BsPerson fontSize={LOGO_FONT_SIZE} />,
  },
  {
    title: "More",
    logo: <CiCircleMore fontSize={LOGO_FONT_SIZE} />,
  },
];

export default sideBarButtons;

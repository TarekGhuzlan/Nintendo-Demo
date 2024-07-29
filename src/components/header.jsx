import React, { useState } from "react";
import TopHeader from "./topHeader";
import BottomHeader from "./bottomHeader";
import MegaMenu from "./megaMenu";
import SmallScreenHeader from "./smallScreenHeader";
import LowerHeaderBar from "./lowerHeaderBar";
import StickyBar from "./stickyBar";
import SearchSection from "./searchSection";
import SmallScreenStickyMenu from "./smallStickyScreenMenu";
import SmallScreenMegaMenu from "./smallScreenMegaMenu";
import SmallScreenDetailsList from "./smallScreenDetailsList";
import MyNintendoIcon from "../assets/icons/MyNintendoIcon.svg";
import DPadIcon from "../assets/icons/DPadIcon.svg";
import NinSwitchIcon from "../assets/icons/NinSwitchIcon.svg";
import NewsIcon from "../assets/icons/NewsIcon.svg";
import StarPlayIcon from "../assets/icons/StarPlayIcon.svg";
import MegaphoneIcon from "../assets/icons/MegaphoneIcon.svg";
import CalenderIcon from "../assets/icons/CalenderIcon.svg";
import ForKidsIcon from "../assets/icons/ForKidsIcon.svg";
import ForParentsIcon from "../assets/icons/ForParentsIcon.svg";
import CompareArrowsIcon from "../assets/icons/CompareArrowsIcon.svg";
import NsoIcon from "../assets/icons/NsoIcon.svg";
import ControllerIcon from "../assets/icons/ControllerIcon.svg";
import TshirtIcon from "../assets/icons/TshirtIcon.svg";
import StarIcon from "../assets/icons/StarIcon.svg";
import CharacterIcon from "../assets/icons/CharacterIcon.svg";

const Header = ({ products }) => {
  const [megaMenuIsOpen, setMegaMenuIsOpen] = useState(false);
  const [megaMenuItem, setMegaMenuItem] = useState({});
  const [searchMenuIsOpen, setSearchMenuIsOpen] = useState(false);
  const [smallScreenMenuIsOpen, setSmallScreenMenuIsOpen] = useState(false);

  const openMegaMenu = (item) => {
    if (item.isDropdown) {
      setMegaMenuIsOpen(!megaMenuIsOpen);
      setMegaMenuItem(item);
    }
  };

  const closeMegaMenu = () => {
    setMegaMenuIsOpen(false);
  };

  const openSearchMenu = () => {
    setSearchMenuIsOpen(true);
  };

  const closeSearchMenu = () => {
    setSearchMenuIsOpen(false);
  };

  const handleSmallScreenMenu = () => {
    setSmallScreenMenuIsOpen(!smallScreenMenuIsOpen);
  };

  const iconsText = [
    {
      icon: MyNintendoIcon,
      text: "My Nintendo Store",
      isDropdown: true,
      isIcon: false,
      options: [
        {
          icon: DPadIcon,
          label: "Games",
          list: ["Nintendo Switch games", "New releases", "Sales & Deals"],
        },
        {
          icon: ControllerIcon,
          label: "Hardware",
          list: [
            "Nintendo Switch systems",
            "Jpn-Con & controllers",
            "Cases & more",
            "amiibo",
          ],
        },
        {
          icon: TshirtIcon,
          label: "Merchandise",
          list: ["Apparel & accessories", "Home & office", "Plush", "Toys"],
        },
        {
          icon: StarIcon,
          label: "Store exclusives",
          list: [
            "Exclusive products",
            "My Nintendo rewards",
            "Nintendo Switch Online offers",
          ],
        },
        {
          icon: CharacterIcon,
          label: "Characters",
          list: ["Pikmin", "Splatoon", "Super Mario", "The Legend of Zelda"],
        },
      ],
    },
    {
      icon: DPadIcon,
      text: "Games",
      isDropdown: true,
      isIcon: true,
      options: [
        { icon: NinSwitchIcon, label: "Nintendo Switch games" },
        { icon: MegaphoneIcon, label: "New releases" },
        { icon: CalenderIcon, label: "Coming soon" },
        { icon: DPadIcon, label: "Shop games" },
      ],
    },
    {
      icon: NinSwitchIcon,
      text: "Nintendo Switch",
      isDropdown: true,
      isIcon: true,
      options: [
        {
          icon: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/Dev/Global%20Navigation/lineup.png",
          label: "Nintendo Switch lineup",
          imgVariant: true,
        },
        {
          icon: CompareArrowsIcon,
          label: "Compare systems",
        },
        {
          icon: NsoIcon,
          label: "Online services",
        },
        {
          icon: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/Dev/Global%20Navigation/procon.png",
          label: "accessories",
          imgVariant: true,
        },
        {
          icon: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/Dev/Global%20Navigation/oled.png",
          label: "Shop systems",
          imgVariant: true,
        },
      ],
    },
    {
      icon: NewsIcon,
      text: "News & Events",
      isDropdown: false,
      isIcon: false,
      options: [],
    },
    {
      icon: StarPlayIcon,
      text: "Play Nintendo",
      isDropdown: true,
      isIcon: true,
      options: [
        { icon: ForKidsIcon, label: "For kids" },
        { icon: ForParentsIcon, label: "For parents" },
      ],
    },
  ];
  return (
    <>
      <div className="hidden lg:block w-full">
        <TopHeader onClick={openSearchMenu} />
        <BottomHeader onClick={openMegaMenu} elements={iconsText} />
        <MegaMenu
          isOpen={megaMenuIsOpen}
          item={megaMenuItem}
          onClick={closeMegaMenu}
        />
      </div>
      <div className="block lg:hidden w-full">
        <SmallScreenHeader />
        <SmallScreenStickyMenu
          openSearch={openSearchMenu}
          openMenu={handleSmallScreenMenu}
        />
        <SmallScreenMegaMenu
          elements={iconsText}
          onClose={handleSmallScreenMenu}
          isOpen={smallScreenMenuIsOpen}
          onClickElement={openMegaMenu}
        />
        <SmallScreenDetailsList
          element={megaMenuItem}
          onClose={closeMegaMenu}
          isOpen={megaMenuIsOpen}
        />
      </div>
      <LowerHeaderBar />
      <StickyBar />
      <SearchSection
        isOpen={searchMenuIsOpen}
        products={products}
        onClick={closeSearchMenu}
      />
    </>
  );
};

export default Header;

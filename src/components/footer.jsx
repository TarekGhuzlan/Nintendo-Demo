import React from "react";
import NintendoIcon from "../assets/icons/NintendoIcon.svg";
import FacebookIcon from "../assets/icons/FacebookIcon.svg";
import InstagramIcon from "../assets/icons/InstagramIcon.svg";
import TwitterIcon from "../assets/icons/TwitterIcon.svg";
import YoutubeIcon from "../assets/icons/YoutubeIcon.svg";
import PrivacyCertifiedIcon from "../assets/icons/PrivacyCertifiedIcon.svg";
import { ReactSVG } from "react-svg";

const Footer = () => {
  const socials = [FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon];
  const sitemap = [
    {
      title: "About Nintendo",
      subTitles: ["Careers", "Corporate Social Responsibility"],
    },
    {
      title: "Shop",
      subTitles: [
        "Games",
        "Hardware",
        "Merchandise",
        "Sales & deals",
        "Exclusives",
        "Online service",
        "Nintendo NY store",
      ],
    },
    {
      title: "My Nintendo Store orders",
      subTitles: [
        "Order details",
        "Shipping info",
        "Returns & exchanges",
        "FAQ",
      ],
    },
    {
      title: "Support",
      subTitles: [
        "Nintendo Switch",
        "Nintendo Account",
        "Other systems",
        "Repairs",
        "Nintendo product recycling",
      ],
    },
    {
      title: "Parents",
      subTitles: ["Info for parents", "Parental controls"],
    },
    {
      title: "Community",
      subTitles: ["Community guidelines", "Online safety principles"],
    },
    {
      title: "Privacy",
      subTitles: ["Privacy policy", "Cookies and interest-based ads"],
    },
  ];
  const footerTitles = [
    "Contact us",
    "Website feedback",
    "Terms of Use",
    "Documents & Policies",
  ];
  return (
    <footer>
      <section className="grid bg-nin_red py-9 px-4 text-white items-center justify-items-end	">
        <div className="w-full max-w-[90rem] mx-auto grid justify-center items-center md:grid-cols-2 gap-8 md:justify-items-end ">
          <a className="	 justify-self-center md:justify-self-start ">
            <ReactSVG src={NintendoIcon} className="w-[195px]" />
          </a>
          <div className="flex flex-row gap-16">
            {socials.map((item) => (
              <a>
                <ReactSVG src={item} />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-8 px-4">
        <div className="max-w-[90rem] w-full mx-auto">
          <div className="grid my-4 mx-auto gap-y-8 justify-center grid-cols-[15.625rem] sm:grid-cols-[repeat(2_,1fr)] sm:gap-x-4 md:grid-cols-[repeat(3_,1fr)] lg:grid-cols-[repeat(4_,1fr)] xl:grid-cols-[repeat(6_,1fr)] xl:-ml-4 ">
            {sitemap.map((item) => (
              <div className="border-l-[1px] first:border-l-transparent border-solid border-nin_breadcrumbs pl-6 xl:row-start-2 xl:row-end-auto xl:last:row-start-3   xl:last:col-start-5">
                <h2 className="text-lg font-bold mb-4">
                  <a
                    href=""
                    className=" hover:underline underline-offset-4 ease-in-out duration-200"
                  >
                    {item.title}
                  </a>
                </h2>
                <ul className="p-0 m-0 text-base leading-[1.8rem] font-bold">
                  {item.subTitles.map((sub) => (
                    <li>
                      <a
                        href=""
                        className="pb-2 text-nin_red hover:text-nin_hoverred hover:underline underline-offset-4 decoration-2	 ease-in-out duration-200"
                      >
                        {sub}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-8 items-center ">
            <a
              href=""
              className="block col-span-1 justify-self-center max-w-16 w-full my-4 lg:justify-self-end lg:col-span-3"
            >
              <ReactSVG src={PrivacyCertifiedIcon} />
            </a>
          </div>
        </div>
      </section>
      <section className="bg-[#242424] text-white text-xs text-center px-4 py-8 pb-28 lg:py-8 lg:px-4">
        <div className="w-full max-w-[90rem] mx-auto">
          <div className="grid grid-cols-[1fr] lg:grid-cols-[1fr_,auto,auto]  gap-8 items-center ">
            <p className="mx-auto max-w-[60rem] text-center lg:text-left">
              <span className="inline-block lg:inline"> © Nintendo. </span>
              <span className="inline-block lg:inline">
                {" "}
                Games are property of their respective owners.{" "}
              </span>
              <span className="inline-block lg:inline">
                {" "}
                Nintendo of America Inc. Headquarters are in Redmond,
                Washington, USA{" "}
              </span>
            </p>
            <div className="inline-flex justify-center gap-4 lg:justify-start">
              {footerTitles.map((i) => (
                <a
                  href=""
                  className="hover:underline underline-offset-4 font-bold"
                >
                  {i}
                </a>
              ))}
            </div>
            <a href="" className="inline-flex items-center justify-center">
              <span className="border-[1px] border-solid border-white rounded-[0.25rem]">
                <img
                  src="https://assets.nintendo.com/image/upload/c_scale,w_24,q_auto/ncom/global/flags-change-region/FlagUsaIconRegionSelect.png"
                  alt=""
                />
              </span>
              <span className="hover:underline underline-offset-4 font-bold ml-2">
                English (United States)
              </span>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

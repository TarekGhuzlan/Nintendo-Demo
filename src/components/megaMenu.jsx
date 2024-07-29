import React from "react";
import CloseButton from "./common/closeButton";
import IconCard from "./common/iconCard";
import Button from "./common/button";
import MyNintendoStoreIcon from "../assets/icons/MyNintendoStoreIcon.svg";
import { ReactSVG } from "react-svg";

const MegaMenu = ({ isOpen, item, onClick }) => {
  if (Object.keys(item).length > 0) {
    return (
      <div
        className={
          isOpen && item.options.length > 0
            ? "absolute top-24 left-0 w-full z-50 bg-white h-auto overflow-hidden shadow-lg "
            : "hidden"
        }
      >
        <div className="flex flex-col  pb-3">
          {item.isIcon ? (
            <>
              <div className="flex justify-end pr-4 pt-2 pb-1">
                <CloseButton
                  onClick={onClick}
                  className="w-[26px] h-[26px]"
                  iconClass="w-[13px]"
                />
              </div>
              <div className="flex justify-center gap-7 px-4 max-w-[1440px] mx-auto">
                {item.options.map((element) => (
                  <a href="#" className="w-[120px] group ">
                    <IconCard
                      icon={element.icon}
                      label={element.label}
                      imgVariant={element.imgVariant}
                      variant={true}
                    />
                  </a>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-end pr-0 pb-6">
                <div className="w-full h-16 bg-nin_red flex items-center justify-center text-white relative">
                  <a className="inline-flex items-center ">
                    <ReactSVG src={MyNintendoStoreIcon} />
                  </a>
                  <div className="absolute right-4 flex justify-end pr-4 pb-1">
                    <CloseButton
                      onClick={onClick}
                      className="w-[26px] h-[26px]"
                      iconClass="w-[13px]"
                    />
                  </div>
                </div>
                <div className='absolute w-full h-3.5 bg-auto bg-repeat-x z-[1] bg-nin_red -bottom-3.5 bg-[url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDVweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgNDUgMTQiIHZlcnNpb249IjEuMSIKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5TdG9yZWZyb250LWF3bmluZy1wYXR0ZXJuPC90aXRsZT4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJTdG9yZWZyb250LWF3bmluZy1wYXR0ZXJuIiBmaWxsPSIjRTYwMDEyIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNNDUsMCBMMCwwIEwwLDEzLjc3MzY4IEMxLjMzMzAyMDAxLDEzLjgzNzcxOTMgMi42NDkxNDAxMywxMy40NTM5MDE4IDMuNzM4NzcsMTIuNjgzMzUgTDE5LjI4NDQ4LDEuNjI4NjYgQzIxLjM2NjIzOTQsMC4xNDgzMTg1OTggMjQuMTU3MDEwNiwwLjE0ODMxODU5OCAyNi4yMzg3NywxLjYyODY2IEw0MS43ODQ0OCwxMi42ODMzNSBDNDIuNzI4MzU2MywxMy4zNTAwNDM4IDQzLjg0NTI4NSwxMy43Mjg3NzYgNDUsMTMuNzczNjggTDQ1LDAgWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==")]'></div>
              </div>

              <div className="flex justify-center gap-7 px-4 max-w-[1440px] mx-auto">
                {item.options.map((element) => (
                  <div className="flex flex-col min-w-[7.5rem]">
                    <a href="" className="inline-flex items-center py-1">
                      <ReactSVG
                        src={element.icon}
                        className="content-center items-center mr-1.5 w-[18px] text-nin_red"
                      />
                      <span className="text-base font-bold hover:text-nin_red ease-in-out duration-200">
                        {element.label}
                      </span>
                    </a>

                    {element.list.map((i) => (
                      <div className="flex flex-col justify-start">
                        <a href="" className="py-1 text-sm hover:text-nin_red">
                          {i}
                        </a>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <a className="mt-4 self-center ">
                <Button
                  label={"Shop all"}
                  className=" bg-white  border-nin_red border-[1px] rounded-2xl h-12  p-6 w-auto hover:bg-[#FDE6E7] border-nin_hoverred"
                  labelClass="text-nin_red text-lg"
                />
              </a>
            </>
          )}
        </div>
      </div>
    );
  }
};

export default MegaMenu;

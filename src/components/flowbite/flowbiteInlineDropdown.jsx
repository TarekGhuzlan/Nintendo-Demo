"use client";

import { Dropdown, Flowbite } from "flowbite-react";
const customTheme1 = {
  dropdown: {
    arrowIcon: "ml-2 h-4 w-4",
    content: " focus:outline-none",
    floating: {
      animation: "transition-opacity",
      arrow: {
        base: "absolute z-10 h-2 w-2 rotate-45",
        style: {
          dark: "bg-gray-900 dark:bg-gray-700",
          light: "bg-white",
          auto: "bg-white dark:bg-gray-700",
        },
        placement: "-4px",
      },
      base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none ",
      content: " text-sm  dark:text-gray-200",
      divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
      header: "block text-sm  dark:text-gray-200",
      hidden: "invisible opacity-0",
      item: {
        container: "rounded-lg",
        base: "flex w-full cursor-pointer items-center justify-start text-sm  hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
        icon: "mx-2 h-4 w-4",
      },
      style: {
        dark: "bg-gray-900 text-white dark:bg-gray-700",
        light: "border border-gray-200 bg-white text-gray-900",
        auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
      },
      target: "w-fit",
    },
    inlineWrapper: "flex items-center",
  },
};

export function FlowbiteInlineDropdown({ options }) {
  return (
    <Flowbite theme={{ theme: customTheme1 }}>
      <Dropdown label={options[0]} inline>
        {options.map((option) => (
          <Dropdown.Item>{option}</Dropdown.Item>
        ))}
      </Dropdown>
    </Flowbite>
  );
}
